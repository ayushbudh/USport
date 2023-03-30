import React from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { FixedSizeList } from 'react-window';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import userAccountService from '../../services/UserAccountService';
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress';

const Connect = () => {

    const [userCount, setUserCount] = useState(-1);
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        userAccountService.getUserAccounts()
        .then((userAccounts) => {
            setUserData(userAccounts.data);
            setUserCount(userAccounts.data.length);  
            setLoading(false);   
        })
    }, []);

    const renderUsers = (props) => {
        const { index, style } = props;
        return (
            <ListItem style={style} key={index} component="div" disablePadding
            secondaryAction={
                    !loading && <IconButton edge="end" aria-label="comments">
                    <ChatBubbleIcon/>
                </IconButton>
              } 
              >
              <ListItemButton>
                  <ListItemAvatar>
                      {loading ? <Skeleton variant="circular">
                            <Avatar />
                        </Skeleton>:
                      <Avatar
                      alt={`Avatar}`}
                      src={index % 2 === 0 ? "https://i.imgur.com/5ey7Mmn.png": "https://i.imgur.com/X7P8oA2.png"}
                    />}
                    </ListItemAvatar>
                {loading ? <ListItemText><Skeleton/></ListItemText> :<ListItemText primary={`${userData[index].firstName} ${userData[index].lastName}`} />}    
              </ListItemButton>
            </ListItem>
        );
    }

    const searchQueryFilter = (query) => {
        userAccountService.searchUser(query).then((userAccounts) => {
            setUserData(userAccounts.data);
            setUserCount(userAccounts.data.length);
        });
    }
    
    return(
        <Grid container p={4} pb={10}>
            <Grid item xs={12} mb={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{ fontWeight: 'bolder'}} variant="h4">Connect</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, 
                    borderRadius: 5, backgroundColor: '#F8F4F4', mb: 3 }}
                >
                <IconButton sx={{ p: '10px' }} aria-label="menu">
                    <SearchIcon />
                </IconButton>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search for players and trainers..."
                    inputProps={{ 'aria-label': 'search for players and trainers' }}
                />
                <IconButton sx={{ p: '10px' }} aria-label="directions">
                    <FilterAltIcon />
                </IconButton>
                </Box>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                        {userCount === 0 ? 
                        <Box height={300}
                            width={500} sx={{ textAlign: 'center'}} >No Users Found!</Box>:
                        loading ? 
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  height: 400,
                            width: 500 }}>
                         <CircularProgress />
                        </Box>:
                        <FixedSizeList
                            height={300}
                            width={500}
                            itemSize={56}
                            itemCount={userCount}
                            overscanCount={5}
                        >
                        {renderUsers}
                    </FixedSizeList>}
                    </Box>
            </Grid>
        </Grid>
    );
}

const renderAddresses = (props) => {
    const { index, style } = props;
  
    return (
        <ListItem style={style} key={index} component="div" disablePadding
        secondaryAction={
            <>
            <IconButton edge="end" aria-label="comments">
              <GroupAddIcon />
            </IconButton>
            <IconButton edge="end" aria-label="comments">
              <ChatBubbleIcon />
            </IconButton>
            </>
          } 
          >
          <ListItemButton>
              <ListItemAvatar>
                  <Avatar
                    alt={`Avatar}`}
                    src={`https://i.imgur.com/fdhlThj.jpg`}
                  />
                </ListItemAvatar>
            <ListItemText primary={`John Doe`} />
          </ListItemButton>
        </ListItem>
    );
}

export default Connect;