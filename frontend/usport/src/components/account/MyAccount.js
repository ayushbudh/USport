import React, { useState, useEffect } from "react";
import "../profile/profile.css";
import { Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Navbar from "../navbar/navbar";
import userAccountService from "../../services/UserAccountService";

const theme = createTheme({
    palette: {
        primary: {
            main: '#009A17',
        },
    },
});

const MyAccount = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        userAccountService.getUserAccounts().then((userAccounts) => {
            setUserData(userAccounts.data[0]);
            setLoading(false);
        })
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            firstName: data.get('firstName'),
            lastName: data.get('lastName'),
            email: data.get('email'),
            password: data.get('password')
        });
    };


    const handleClick = () =>{
        console.log("Clciked");
    };

    return(
        <>
        <Navbar authenticated={true}/>
        <div className="MyProfile">
        <Grid container component="main" sx={{ height: '30vh' }}>
            <Grid container justifyContent="center" spacing={2}>
                <Typography component="h1" variant="h5"
            sx={{fontSize: 45,
              fontWeight: 600}}>
              My Account
            </Typography>
            </Grid>

            <Grid container justifyContent="center" spacing={2} pb={4}>
                <Grid item mt={2}>
                    <Avatar
                        onClick={handleClick}
                        src={"https://i.imgur.com/bPrNWLo.jpg"} alt=""
                        style={{ width: "250px", height: "250px" }}
                    />
                </Grid>
            </Grid>
            <Grid
            container
            mt={5}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}
            >
                <Box component="form" noValidate onSubmit={handleSubmit} justifyContent="center" alignItems={"center"}>
                    <Grid container spacing={4} direction="row" pb={4} >

                        <Grid item>
                            <TextField required name="firstName" label="First Name" id="firstName" />
                        </Grid>
                        <Grid item>
                            <TextField required label="Last Name" id="lastName"  name="lastName"/>
                        </Grid>

                    </Grid>
                    <Grid container spacing={4} direction="column">

                        <Grid item>
                            <TextField required sx={{width:480}} name="email" label="Email address"  id="email"/>
                        </Grid>
                        <Grid item>
                            <TextField required sx={{width:480}} name="password" label="Password" type="password" id="password"/>
                        </Grid>
                        <Grid item>
                            <ThemeProvider theme={theme}>
                            <Button variant="contained" sx={{width:200}} color="primary" type="submit">
                            Update
                            </Button>
                            </ThemeProvider>
                        </Grid>

                    </Grid>
                </Box>
            </Grid>
                
                    
            </Grid>
        </div>
        </>
    )
}

export default MyAccount