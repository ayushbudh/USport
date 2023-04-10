import React, { useState, useEffect } from "react";
import "../profile/profile.css";
import { Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Navbar from "../navbar/navbar";
import userAccountService from "../../services/UserAccountService";
import { useAuth } from "../../contexts/AuthContext";
import {CircularProgress} from "@mui/material";

const MyAccount = () => {

    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(true);
    const {currentUser} = useAuth();

    useEffect(() => {
        userAccountService.getUser(currentUser.uid)
        .then((userAccounts) => {
            setUserData(userAccounts.data);
            setLoading(false);
        })
        .catch((error) => {
        })
    }, [currentUser.uid]);

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return(
        <>
        <Navbar authenticated={true}/>
        <div className="MyProfile">
        {loading ? <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:20}}>
            <CircularProgress />
            <Typography variant="h6" sx={{ml: 2}}>Loading...</Typography>
        </Box>:
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
                        <TextField variant="standard" required name="firstName" label="First Name" defaultValue={userData['first_name']} id="firstName" />
                    </Grid>
                    <Grid item>
                        <TextField  variant="standard" required label="Last Name" id="lastName" defaultValue={userData['last_name']} name="lastName"/>
                    </Grid>

                </Grid>
                <Grid container spacing={4} direction="column">

                    <Grid item>
                        <TextField variant="standard" disabled sx={{width:480}} name="email" label="Email address" defaultValue={userData['email']} id="email"/>
                    </Grid>
                    <Grid item>
                        <TextField  variant="standard" required sx={{width:480}} name="password" label="Password" defaultValue={"******..."} type="password" id="password"/>
                    </Grid>
                </Grid>
            </Box>
        </Grid>
            
                
    </Grid>}
        </div>
        </>
    )
}

export default MyAccount