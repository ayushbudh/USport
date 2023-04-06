import React from 'react'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import ErrorIcon from '@mui/icons-material/Error';

const FieldInformation = ({props}) => {
    const navigate = useNavigate();
    const handleBackButtonClick = () =>{
        navigate('/home');
    }
    const handleNextButtonClick = () => {
        props.setCurrentPage(2);
    }
    
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
                        <Typography variant="h4">{props.data['name']}</Typography>
                        <Typography variant="h6" sx={{display: 'flex'}}><LocationOnIcon sx={{fontSize: 25}}/>
                            {props.data["address"]["streetAddress"]}
                        </Typography>
                        <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                            {props.data["address"]["city"]},
                        </Typography>
                        <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                            {props.data["address"]["state"]},
                        </Typography>
                        <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                            {props.data["address"]["zipCode"]}
                        </Typography>
                    </Grid> 
                    <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Box
                        component="img"
                        src="https://i.imgur.com/27J8sXS.png"
                        width={400}/>
                    </Grid>
                </Grid>
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', mt: 1}}>
                    <Typography variant="h6">Info</Typography>
                </Grid> 
                <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start', mt: 1}}>
                    <Typography variant="subtitle1" fontWeight={700}>Minimum number of players needed</Typography>
                    <Typography variant="subtitle2">{props.data['minimumPlayers']}</Typography>
                    <Typography variant="subtitle1" fontWeight={700}>Field Dimension</Typography>
                    <Typography variant="subtitle2">{props.data['length']} x {props.data['width']} meters (l x w)</Typography>
                    <Typography variant="subtitle1" fontWeight={700}>Sports types</Typography>
                    <Typography variant="subtitle2">Soccer, Football, Baseball</Typography>
                    <Typography variant="subtitle1" fontWeight={700}>Trainers avaiable</Typography>
                    <Typography variant="subtitle2">{props.data['trainersAvailable'] ? "Yes": "No"}</Typography>
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