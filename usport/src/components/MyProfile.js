import React from "react";
import "./profile.css";
import ListItemAvatar from '@mui/material/ListItemAvatar';
import { Avatar } from "@mui/material";
import ProfileInformation from "./profileInfo";
export default function MyProfile()
{
    return(
        <div className="MyProfile">
            <h1 className="pHeader">
                Profile
            </h1>
            <div className="pfp">
            <ListItemAvatar>
                <Avatar
                  src={"https://i.imgur.com/bPrNWLo.jpg"} alt=""
                    style={{ width: "250px", height: "250px" }}
                />
            </ListItemAvatar>

            </div>

               <h2 className="name">
                John Doe
               </h2>
               <div className="restInfo">
                <ProfileInformation></ProfileInformation>
               </div>
        </div>
    )
}