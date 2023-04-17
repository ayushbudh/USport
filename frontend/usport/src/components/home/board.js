import React, { useState, useEffect } from "react";
import Lead from "./listPeople";
import './style.css';
import Top from "./Top";
import Typography from '@mui/material/Typography';


export default function Board()
{
  const [dataList, setDataList] = useState([]);

useEffect(() => {
  fetch('http://localhost:8080/api/user_metric')
    .then(response => response.json())
    .then(data => {
      // Extract the user IDs from the data
      const userIds = data.map(metric => metric.user_id); // <-- Updated key name

      // Fetch the user account data for the retrieved user IDs
      Promise.all(userIds.map(userId =>
        fetch(`http://localhost:8080/api/user/userById/${userId}`)
          .then(response => response.json())
      ))
        .then(userData => {
          // Convert the array of user data into a map
          const userMap = userData.reduce((acc, user) => {
            acc[user.id] = `${user.first_name} ${user.last_name}`;
            return acc;
          }, {});

          // Merge the user account data with the user metric data
          const mergedData = data.map(metric => {
            const name = userMap[metric.user_id];
            return { ...metric, name };
          });
          setDataList(mergedData);
//          console.log(mergedData);
//          console.log(userIds);
        })
        .catch(error => console.error('Error fetching user account data:', error));
    })
    .catch(error => console.error('Error fetching user metric data:', error));
}, []);

    return (
        <div className="board">
            <Typography sx={{ fontWeight: 'bolder'}} variant="h4">Ranking</Typography>
            <Top></Top>
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="table">
                <Lead dataList={dataList} />
            </div>
        </div>
    );
}
