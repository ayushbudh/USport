import React from "react";
import './style.css'

export default function top() {
    return (
        <div id="top">
            <h1><b>Ranking</b></h1>
            <div className="topThree">
                <img src="../../images/rank3.png" alt="rank3" height={100}></img>
                <img src="../../images/rank1.png" alt="rank1"height={160}></img>
                <img src="../../images/rank2.png" alt="rank2"height={120}></img>
            </div> 
        </div>

    )
}