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
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
    {somedata.map((n) => {
        const labelId = `checkbox-list-secondary-label-${n}`;
        return (
          <ListItem>
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