import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PublicNavbar from '../publicnavbar/publicnavbar';
import Typography from '@mui/material/Typography';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { Carousel } from 'react-responsive-carousel';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Landing = () => {
  
    return (
      <>
        <PublicNavbar/>
        <Box sx={{ m: 5}}>
        <Grid container spacing={2} 
                direction="row"
                justifyContent="center"
                alignItems="center">
            <Grid item xs={12} sx={{marginBottom: 5}} textAlign="center">
                <Carousel showThumbs={false} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    <div>
                        <img src="https://i.imgur.com/1F5SSk9.png" alt="Green sports field"/>
                        <p className="legend"
                        style={{ backgroundColor: 'transparent', fontSize: '5vw', fontWeight:'bolder', color: '#011627'}}>Play. Connect. Learn.</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/8mvWgFm.png" alt="Two athletes competing to win the race"/>
                        <p className="legend"
                        style={{ backgroundColor: 'transparent', fontSize: '5vw', fontWeight:'bolder', color: '#011627'}}>Compete</p>
                    </div>
                    <div>
                        <img src="https://i.imgur.com/i8yZQSW.png" alt="Players playing badminton game" />
                        <p className="legend"
                        style={{ backgroundColor: 'transparent', fontSize: '5vw', fontWeight:'bolder', color: '#011627'}}>Follow Players</p>
                    </div>
                </Carousel>
            </Grid>
            <Grid item xs={4.5}>
                <Box 
                    component="img"
                    sx={{
                        margin: 'auto',
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    alt="Green Ground"
                    src="https://i.imgur.com/GAMt44x.png"
                />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h4">Looking for someone to play a game ?</Typography>
                <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h4">Network with other players</Typography>
                <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
            </Grid>
            <Grid item xs={4.5}>
                <Box 
                    component="img"
                    sx={{
                        margin: 'auto',
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    alt="Green Ground"
                    src="https://i.imgur.com/mmjxIp1.png"
                />
            </Grid>
            <Grid item xs={4.5}>
                <Box 
                    component="img"
                    sx={{
                        margin: 'auto',
                        maxWidth: '100%',
                        height: 'auto'
                    }}
                    alt="Green Ground"
                    src="https://i.imgur.com/2BvcPss.png"
                />
            </Grid>
            <Grid item xs={5}>
                <Typography variant="h4">Find trainers</Typography>
                <Typography variant="subtitle1">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </Typography>
            </Grid>
        </Grid>
        </Box>
        <Box sx={{ backgroundColor: '#011627'}}>
        <Grid container spacing={0} padding={5} justifyContent="space-between">
            <Grid item sx={{ color: '#FDFFFC'}}>
                <Grid container>
                    <Grid item xs={3.5}>
                        <SportsSoccerIcon sx={{ fontSize: 45, color: '#FF9F1C' }} />
                    </Grid>
                    <Grid item xs={2}>
                        <Typography variant="h4" mb={2}>USport</Typography>
                        <Typography variant="h5">Mission</Typography>
                        <Typography variant="h5">FAQ</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item sx={{ color: '#FDFFFC'}}>
                <Typography variant="h4" mb={2}>Follow Us</Typography>
                <Typography variant="h5">
                    <LinkedInIcon sx={{ fontSize: 30, color: '#FDFFFC' }} /> Linkedin</Typography>
                <Typography variant="h5"><InstagramIcon sx={{ fontSize: 30, color: '#FDFFFC' }} /> Instagram</Typography>
            </Grid>
        </Grid>
        </Box>

      </>
    );
}

export default Landing;