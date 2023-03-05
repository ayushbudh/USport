import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Lead({Leaderboard})
{
  return (
    <div id="team">
      <h3 className='t'>Team</h3>
      <div className='indB'>
        {CheckboxListSecondary(Leaderboard)}
      </div>
      
    </div>)
}

function CheckboxListSecondary(somedata) {
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
    {somedata.map((n) => {
        return (
          <ListItem
          key={n.id}
          >
            <ListItemButton> 
              <ListItemAvatar>
                <Avatar
                  src={n.img} alt=""
                />
              </ListItemAvatar>
              <ListItemText  primary={n.name}/> 
            <div className='Score'>
                <ListItemText  primary={n.score}/>
            </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}