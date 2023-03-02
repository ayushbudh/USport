import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { FixedSizeList } from 'react-window';
import Navbar from '../navbar/navbar';

const Notification = () => {
    return(
        <>
            <Navbar authenticated={true}/>
            <Grid container mt={12}>
                <Grid item  xs={6}>
                    <Typography sx={{textAlign: 'center'}} variant="h3">Notifications</Typography>
                </Grid>
                <Grid item  xs={6}>
                    <Typography sx={{textAlign: 'center'}} variant="h3">Upcoming Games</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
                    <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                        <FixedSizeList
                            height={400}
                            width={500}
                            itemSize={46}
                            itemCount={1}
                            overscanCount={5}
                        >
                            {renderNotifications}
                        </FixedSizeList>
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
                    <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                        <FixedSizeList
                            height={400}
                            width={500}
                            itemSize={46}
                            itemCount={1}
                            overscanCount={5}
                        >
                            {renderUpComingGames}
                        </FixedSizeList>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

const renderNotifications = (props) => {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
            <ListItemAvatar>
                <Avatar
                  alt={`Avatar}`}
                  src={`https://i.imgur.com/fdhlThj.jpg`}
                />
              </ListItemAvatar>
          <ListItemText primary={`John Doe started following you.`} />
        </ListItemButton>
      </ListItem>
    );
  }

  const renderUpComingGames = (props) => {
    const { index, style } = props;
  
    return (
      <ListItem style={style} key={index} component="div" disablePadding>
        <ListItemButton>
          <ListItemText  primary={`Green Park`} secondary={`Address: 33 Gilmer Street SE Atlanta, GA 30303 `}/>
        </ListItemButton>
      </ListItem>
    );
  }

export default Notification;