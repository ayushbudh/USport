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
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const Connect = () => {
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
                        <FixedSizeList
                            height={400}
                            width={500}
                            itemSize={56}
                            itemCount={2}
                            overscanCount={5}
                        >
                            {renderAddresses}
                        </FixedSizeList>
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