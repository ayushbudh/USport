import React, { useEffect, useState } from 'react';
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
import notificationService from '../../services/NotificationService';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';
import { useAuth } from '../../contexts/AuthContext';

const Notification = () => {

    const [notifications, setNotifications] = useState([]);
    const [upcomingGamesNotifications, setUpcomingGamesNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUserId } = useAuth();

    useEffect(() => {
        notificationService.getUserNotifications(currentUserId)
        .then((notifications) => {
            if(notifications.data.length === 0){
              setLoading(false);
              return;
            }
            setNotifications(notifications.data.filter((x) => x.is_upcoming_game === false));
            setUpcomingGamesNotifications(notifications.data.filter((x) => x.is_upcoming_game === true));
            setLoading(false);
        });
    }, [currentUserId]);

    const renderNotifications = (props) => {
      const { index, style } = props;
      return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton>
              <ListItemAvatar>
              {loading ? 
                <Skeleton variant="circular">
                  <Avatar />
                </Skeleton>:
                <Avatar
                  alt={`Avatar}`}
                  src={index % 2 === 0 ? "https://i.imgur.com/5ey7Mmn.png": "https://i.imgur.com/X7P8oA2.png"}
              />}
                </ListItemAvatar>
                {loading ? <ListItemText><Skeleton/></ListItemText> : <ListItemText primary={`${notifications[index].message}`} />}
          </ListItemButton>
        </ListItem>
      );
    }

    const renderUpComingGames = (props) => {
      const { index, style } = props;
    
      return (
        <ListItem style={style} key={index} component="div" disablePadding>
          <ListItemButton>
          {loading ? <ListItemText><Skeleton/></ListItemText> : <ListItemText  primary={`${upcomingGamesNotifications[index].message}`}/>}
          </ListItemButton>
        </ListItem>
      );
    }

    return(
        <>
            <Navbar authenticated={true}/>
            <Grid container mt={8} mb={4}>
                <Grid item  xs={6}>
                    <Typography sx={{textAlign: 'center'}} variant="h3">Notifications</Typography>
                </Grid>
                <Grid item  xs={6}>
                    <Typography sx={{textAlign: 'center'}} variant="h3">Upcoming Games</Typography>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
                    <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                        {loading ? 
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                          width: 500 }}>
                           <CircularProgress />
                         </Box>
                         :
                         notifications.length === 0 ? 
                         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                          width: 500 }}>
                           No Notifications
                         </Box>:
                         <FixedSizeList
                         height={400}
                         width={500}
                         itemSize={70}
                         itemCount={notifications.length}
                         overscanCount={5}
                     >
                         {renderNotifications}
                     </FixedSizeList>
                         }
                    </Box>
                </Grid>
                <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center', mt: 5}}>
                    <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                        {loading ? 
                         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                         width: 500 }}>
                          <CircularProgress />
                        </Box>
                         :
                         upcomingGamesNotifications.length === 0 ? 
                         <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                          width: 500 }}>
                           No Upcoming Games
                         </Box>:
                         <FixedSizeList
                            height={400}
                            width={500}
                            itemSize={70}
                            itemCount={upcomingGamesNotifications.length}
                            overscanCount={5}
                        >
                            {renderUpComingGames}
                        </FixedSizeList>}
                        
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}

export default Notification;