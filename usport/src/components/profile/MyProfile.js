import React from "react";
import "./profile.css";
import { Avatar } from "@mui/material";
import ProfileInformation from "./profileInfo";
import Navbar from "../navbar/navbar";

export default function MyProfile()
{
    return(
        <>
        <Navbar authenticated={true}/>
        <div className="MyProfile">
            <h1 className="pHeader">
                Profile
            </h1>
            <div className="pfp">
                <Avatar
                src={"https://i.imgur.com/bPrNWLo.jpg"} alt=""
                style={{ width: "250px", height: "250px" }}
                />
            </div>

            <h2 className="name">
                John Doe
            </h2>
            <div className="restInfo">
                <ProfileInformation></ProfileInformation>
            </div>
        </div>
        </>
    )
}