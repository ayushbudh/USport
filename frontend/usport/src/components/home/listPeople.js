import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

export default function Lead({ dataList }) {
  return (
    <div id="team">
      <div className='indB'>
        {CheckboxListSecondary(dataList)}
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
          sx={{ width: '360px'}}
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  src={n.img} alt=""
                />
              </ListItemAvatar>
              <ListItemText primary={n.name} />
              <div className='Score'>
                <ListItemText primaryTypographyProps={{align: 'left'}} primary={`Score: ${n.rating}`} />
              </div>
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

