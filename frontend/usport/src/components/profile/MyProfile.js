import React, { useEffect, useState } from "react";
import "./profile.css";
import { Avatar, CircularProgress } from "@mui/material";
import ProfileInformation from "./profileInfo";
import Navbar from "../navbar/navbar";
import { useAuth } from "../../contexts/AuthContext";
import userMetricService from "../../services/UserMetricService";
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import sporService from "../../services/SportService";
import userAccountService from "../../services/UserAccountService";

export default function MyProfile(){

    const {currentUserId, currentUser} = useAuth();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userMetric, setUserMetric] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        userMetricService.getUserMetric(currentUserId)
        .then((usermetric) => {
            sporService.getSportsForUserMetric(usermetric.data['id'])
            .then((sports) => {
                userAccountService.getUser(currentUser.uid)
                .then((userAccounts) => {
                    usermetric.data['fullName'] = userAccounts.data['first_name'] + " " 
                        + userAccounts.data['last_name'];
                    setUserMetric({info: usermetric.data, sports: sports.data});
                    setLoading(false);
                })
                .catch((error) => {
                    setError(true);
                    setLoading(false);
                })
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            })
        })
        .catch((error) =>{
            setError(true);
            setLoading(false);
        })
    }, [currentUser.uid, currentUserId]);

    return(
        <>
        <Navbar authenticated={true}/>
        {loading ?
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt:20}}>
            <CircularProgress />
            <Typography variant="h6" sx={{ml: 2}}>Loading...</Typography>
        </Box>:
        error ? 
        <Box xs={12} sx={{display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', mt: 5}}>
            <Typography variant="h5" >You will first need to set up your profile</Typography>
            <Button sx={{mt: 5}} variant='contained' color='secondary' onClick={()=>{navigate('/profilesetup')}} >Set up profile</Button>
        </Box>:<div className="MyProfile">
            <Typography variant="h4" sx={{fontWeight: 'bolder'}}>Profile</Typography>
            <div className="pfp">
                <Avatar
                src={"https://i.imgur.com/bPrNWLo.jpg"} alt=""
                style={{ width: "150px", height: "150px" }}
                />
            </div>

            <h2 className="name">
                {userMetric['info']['fullName']}
            </h2>
            <div className="restInfo">
                <ProfileInformation userMetric={userMetric}></ProfileInformation>
            </div>
        </div>}
        </>
    )
}