import React from "react";
import "./profile.css";
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export default function ProfileInformation({userMetric}) {
  return (
    <div className="information">
      <div className="Heads1">
        Bio:
      </div>
      <div className="bioInfo">
        {userMetric['info']['bio']}
      </div>
      <div className="Heads2">
        Sports:
      </div>
      <div className="SportsInfo">
          <Stack direction="row" spacing={1}> 
              {userMetric['sports'] ? userMetric['sports'].length === 0 ? "No Sports" : userMetric['sports'].map((sport) => { return <Chip key={sport['id']} variant="subtitle2" 
              label={sport['sportName']} /> }) : "No Sports"}
          </Stack>
      </div>
      <div className="Heads3">
        Ranking:
        <div className="cup-icon">
          <img src="https://i.imgur.com/Np1YNOk.png" alt="Cup" />
          <div className="number">{userMetric['info']['rating']}</div>
        </div>
      </div>
    </div>
  )
}
