import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
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
const Play = () => {
    const navigate = useNavigate();
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
                <IconButton sx={{ p: '10px' }} aria-label="directions">
                    <FilterAltIcon />
                </IconButton>
                </Box>
            </Grid>
            <Grid item xs={5} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2, ml: 2}}>
                <Box
                component="img"
                src="https://i.imgur.com/TAIct0v.png"
                height={300}/>

            </Grid>
            <Grid item xs={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', mt: 0}}>
                <Box sx={{ backgroundColor: '#F8F4F4', p: 3, borderRadius: 5}}>
                    <FixedSizeList
                        height={250}
                        width={500}
                        itemSize={80}
                        itemCount={2}
                        overscanCount={5}
                        itemData={navigate}
                    >
                        {renderFields}
                    </FixedSizeList>
                </Box>
            </Grid>
        </Grid>
    );
}

const renderFields = (props) => {
    const { index, style, data } = props;
    const handleListItemOnClick = () => {
        // TODO: Find an alternative
        // Use to navigate to new route
        data("/creategame");
    }

    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton onClick={handleListItemOnClick}>
          <ListItemText  primary={`Green Park`} secondary={`Address: 33 Gilmer Street SE Atlanta, GA 30303 `}/>
        </ListItemButton>
      </ListItem>
    );
}

export default Play;