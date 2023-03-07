import  * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';

const ChatList = ({setCurrentPage}) => {
 
    return(
        <Grid container pl={4} pr={4} pb={4} pt={3}>
            <Grid item xs={12} mb={4} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Typography sx={{ fontWeight: 'bolder'}} variant="h4">Chats</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <Box sx={{ backgroundColor: '#F8F4F4', p: 5, borderRadius: 5}}>
                    <FixedSizeList
                        height={400}
                        width={460}
                        itemSize={50}
                        itemCount={2}
                        overscanCount={5}
                        itemData={setCurrentPage}
                    >
                        {renderRow}
                    </FixedSizeList>
                </Box>
            </Grid>
        </Grid>
    );
}


const renderRow = (props) => {
    const { index, data } = props;
    
    function handleOpenChatClick(){
        // TODO: Find an alternative to this approach
        // setting current page 
        data(2);
    }
    return (
      <ListItem key={index} component="div" disablePadding>
        <ListItemButton onClick={handleOpenChatClick}>
            {index === 0 ? 
            <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="https://i.imgur.com/fdhlThj.jpg" />
                <Avatar alt="Travis Howard" src="https://i.imgur.com/ID3xi0J.jpg" />
                <Avatar alt="Cindy Baker" src="https://i.imgur.com/ID3xi0J.jpg" />
                <Avatar alt="Agnes Walker" src="https://i.imgur.com/ID3xi0J.jpg" />
                <Avatar alt="Trevor Henderson" src="https://i.imgur.com/ID3xi0J.jpg" />
            </AvatarGroup>
            :
            <Avatar alt="Trevor Henderson" src="https://i.imgur.com/ID3xi0J.jpg" />}
          <Typography pl={1}> {index === 0 ? "Game at 2:00 pm at the Green Park on 2 Mar 2023": "John Doe"}</Typography>
        </ListItemButton>
      </ListItem>
    );
}

export default ChatList;