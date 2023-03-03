import React from "react";
import Profiles from "./profiles";
// import { Leaderboard } from "./database";


export default function Board({Leaderboard})
{
    return (
        <div className="board">
            <h1 className="leaderboard">Team</h1>

            <Profiles Leaderboard ={Leaderboard}></Profiles>
        </div>)
}