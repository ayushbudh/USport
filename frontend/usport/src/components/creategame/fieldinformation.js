import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';


const FieldInformation = ({props}) => {
    const navigate = useNavigate();

    const [fielData, setFieldData] = useState(null);
    const [loading, setLoading] = useState(true);
    const handleBackButtonClick = () =>{
        navigate('/home');
    }
    const handleNextButtonClick = () => {
        props.setCurrentPage(2);
    }

    useEffect(() => {
        if(props.data){
            setFieldData(props.data);
            setTimeout(() => {
                setLoading(false);
            },500);        
        }
    }, [props.data])

    return (
            <Grid container pl={4} pr={4} pb={4} pt={3}>
            <Grid item xs={8} lg={7} md={7} mb={4} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton aria-label="Back button Icon" onClick={handleBackButtonClick}>
                        <Avatar src={'https://i.imgur.com/f6Uve0Z.png'} />
                </IconButton>
                <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Field Information</Typography>
            </Grid>
            {props.data === null ? 
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', 
                    alignItems: 'center', justifyContent: 'center', mt: 5}}>
                    <ErrorIcon fontSize='large' color='error' sx={{ mr: 2}} />
                    <Typography variant="h5">Please select a field first by navigating back from the play page.</Typography>
                </Grid>
            :
            <>
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Grid item xs={5} lg={4} p={1}>
                        {loading ? 
                        <Stack spacing={1}>
                            <Skeleton variant="rectangular" width={310} height={40}  />
                            <Skeleton variant="rectangular" width={250} height={20}  />
                            <Skeleton variant="rectangular" width={250} height={20}  />
                            <Skeleton variant="rectangular" width={250} height={20}  />
                            <Skeleton variant="rectangular" width={150} height={20}  />
                        </Stack>
                        :
                        <>
                            <Typography variant="h4">{fielData['name']}</Typography>
                            <Typography variant="h6" sx={{display: 'flex'}}>
                            <LocationOnIcon sx={{fontSize: 25}}/>
                            {fielData["address"]["streetAddress"]}
                            </Typography>
                            <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                                {fielData["address"]["city"]},
                            </Typography>
                            <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                                {fielData["address"]["state"]},
                            </Typography>
                            <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                                {fielData["address"]["zipCode"]}
                            </Typography>
                        </>
                        }
                    </Grid> 
                    <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
                        {loading ? 
                        <Skeleton variant="rectangular" width={400} height={250} />
                        :
                        <Box
                        component="img"
                        src="https://i.imgur.com/27J8sXS.png"
                        width={400}/>}

                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 1}}>
                    <Typography variant="h6">Info</Typography>
                </Grid> 
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start', mt: 1}}>
                    <Typography variant="subtitle1" fontWeight={700}>Minimum number of players needed</Typography>
                        {loading ?  <Skeleton variant="rectangular" width={100} height={20} />: <Typography variant="subtitle2">{fielData['minimumPlayers']}</Typography>}
                    <Typography variant="subtitle1" fontWeight={700}>Field Dimension</Typography>
                        {loading ?  <Skeleton variant="rectangular" width={200} height={20} />: <Typography variant="subtitle2">{fielData['length']} x {fielData['width']} meters (l x w)</Typography>}
                    <Typography variant="subtitle1" fontWeight={700}>Sports types</Typography>
                        {loading ?  <Skeleton variant="rectangular" width={310} height={20} />:
                        <Stack direction="row" spacing={1}> 
                        {fielData['sports'] ? fielData['sports'].length === 0 ? "No Sports" : fielData['sports'].map((sport) => { return <Chip key={sport['id']} variant="subtitle2" 
                        label={sport['sportName']} /> }) : "No Sports"}
                        </Stack>}
                    <Typography variant="subtitle1" fontWeight={700}>Trainers avaiable</Typography>
                        {loading ?  <Skeleton variant="rectangular" width={100} height={20} />: <Typography variant="subtitle2">{fielData['trainersAvailable'] ? "Yes": "No"}</Typography>}
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 3}}>
                    <IconButton aria-label="Next button Icon" onClick={handleNextButtonClick}>
                            <Avatar src={'https://i.imgur.com/VH6Cdeo.png'} />
                    </IconButton>
                </Grid>
            </>
            } 
        </Grid>
    );
}

export default FieldInformation;