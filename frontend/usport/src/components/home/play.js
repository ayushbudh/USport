import React, { useState, useEffect } from 'react'
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import fieldService from '../../services/FieldService';
import sporService from '../../services/SportService';
import fieldAddressService from '../../services/FieldAddressService';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ListItemIcon from '@mui/material/ListItemIcon';

const Play = () => {
    const navigate = useNavigate();
    const [field, setField] = useState([]);
    const [fieldCount, setFieldCount] = useState(-1);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const renderFields = (props) => {
        const { index, style, data } = props;
        const handleListItemOnClick = (fieldData) => {
            // TODO: Find an alternative
            // Use to navigate to new route
            data.navigate("/creategame", { state: { fieldData: fieldData } });
        }
    
        return (
          <ListItem style={style} key={index} component="div" disablePadding>
            <ListItemButton onClick={() => handleListItemOnClick(field[index])}>
            <ListItemIcon>
                <LocationOnIcon />
              </ListItemIcon>
                {!loading && <ListItemText  primary={`${field[index]["name"]}`} 
                secondary={`${field[index]["address"]["streetAddress"]}, ${field[index]["address"]["city"]},
                 ${field[index]["address"]["state"]}, ${field[index]["address"]["zipCode"]}, ${field[index]["address"]["country"]}`}/>}
            </ListItemButton>
          </ListItem>
        );
    }

    useEffect(() => {
        setLoading(true);
        // TODO: Replace this approach with SQL Join query
        fieldService.getFields()
        .then((fields) => {
            fieldAddressService.getFieldAddresses()
            .then((fieldaddress) => {
                const fa = fieldaddress.data;
                fields.data.map((field) => {
                    // TODO: Compare the performance of this with the SQL join query. 
                    const result = fa.filter((f) => f['id'] === field['addressId']);
                    if(result.length !== 0){
                        field['address'] = result[0];
                    }else{
                        field['address'] = null;
                    }

                    sporService.getSportsForField(field.id)
                    .then((sports) => {
                        field['sports'] = sports.data;
                    })
                    .catch((error) => {
                        setError(error);
                    })
                                                 
                    return field;
                });
                setField(fields.data);
                setFieldCount(fields.data.length);
            })
            .catch((error) => {
                setError(error);
            })
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setLoading(false);
        })
    }, []);

    return(
        <Grid container p={4}>
            <Grid item xs={12} mb={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{ fontWeight: 'bolder'}} variant="h4">Play</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, 
                    borderRadius: 5, backgroundColor: '#F8F4F4', mb: 3 }}
                >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search nearby play grounds..."
                    inputProps={{ 'aria-label': 'search nearby play grounds' }}
                />
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ backgroundColor: '#F8F4F4', p: 3, borderRadius: 5}}>
                {loading ? 
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                        width: 500 }}>
                        <CircularProgress />
                        <Typography sx={{ ml: 2}}>Fetching fields...</Typography>
                    </Box>
                    :
                    fieldCount === 0 ? 
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                        width: 500 }}>
                        No Fields
                    </Box>
                    :
                    <FixedSizeList
                        height={400}
                        width={500}
                        itemSize={80}
                        itemCount={fieldCount}
                        overscanCount={5}
                        itemData={{navigate: navigate}}
                    >
                        {renderFields}
                    </FixedSizeList>
                }
                </Box>
            </Grid>
        </Grid>
    );
}

export default Play;