import React from "react";
import Lead from "./listPeople";
import './style.css';
import Top from "./Top"
import { Leaderboard, Leaderboard2 } from "./database";


export default function Board()
{
    return (
        <div className="board">
            <Top></Top>
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="table">
            <Lead Leaderboard={Leaderboard}></Lead>
            <Lead Leaderboard={Leaderboard2}></Lead>
            </div>
            
        </div>)
}