import  * as React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AvatarGroup from '@mui/material/AvatarGroup';
import InputBase from '@mui/material/InputBase';
import SendIcon from '@mui/icons-material/Send';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";

const ChatDetail = ({setCurrentPage}) => {
    const handleBackButtonClick = () => {
        setCurrentPage(1);
    }
    return(
        <Grid container>
            <Grid item xs={8} lg={6} md={7} mb={4} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton aria-label="Back button Icon" onClick={handleBackButtonClick}>
                        <Avatar src={'https://i.imgur.com/f6Uve0Z.png'} />
                </IconButton>
                <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Chat</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
            <Box ml={15} mr={20} p={3} height={'85%'} width={500}
            sx={{ boxShadow: '0px 2px 18px rgba(0, 0, 0, 0.1);'}}>
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex', alignItems: "center"}}>
                        <AvatarGroup max={3}>
                            <Avatar alt="Remy Sharp" src="https://i.imgur.com/fdhlThj.jpg" />
                            <Avatar alt="Travis Howard" src="https://i.imgur.com/ID3xi0J.jpg" />
                            <Avatar alt="Cindy Baker" src="https://i.imgur.com/ID3xi0J.jpg" />
                            <Avatar alt="Agnes Walker" src="https://i.imgur.com/ID3xi0J.jpg" />
                            <Avatar alt="Trevor Henderson" src="https://i.imgur.com/ID3xi0J.jpg" />
                        </AvatarGroup>
                        <Typography variant='h6' pl={1}>Players</Typography>
                    </Grid>
                    <Grid item mt={5} xs={12} mb={3}>
                    {/* TODO: Resolve the flickering issue */}
                    <FixedSizeList
                        height={280}
                        itemSize={250}
                        itemCount={10}
                        overscanCount={115}
                    >
                        {renderChat}
                    </FixedSizeList>
                    </Grid>
                    <Grid item xs={12} sx={{ display: 'flex',}}>
                        <Box
                            component="form"
                            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, 
                                borderRadius: 5, backgroundColor: '#F8F4F4', mb: 3 }}
                            >
                            <InputBase
                                sx={{ ml: 1, flex: 1 }}
                                placeholder="Write message"
                                inputProps={{ 'aria-label': 'Write message' }}
                            />
                            <IconButton sx={{ p: '10px' }} aria-label="directions">
                                <SendIcon />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            </Grid>
        </Grid>
    );
}

const chat = [
    {
      sender: "Alice",
      message: "Hey everyone, how's it going?",
      timestamp: "2023-03-05T12:00:00Z"
    },
    {
      sender: "Bob",
      message: "I'm doing well, thanks for asking. How about you?",
      timestamp: "2023-03-05T12:02:00Z"
    },
    {
      sender: "Charlie",
      message: "I'm good too, thanks. How was everyone's weekend?",
      timestamp: "2023-03-05T12:04:00Z"
    },
    {
      sender: "Dave",
      message: "It was great, thanks. I went camping with some friends. How about you guys?",
      timestamp: "2023-03-05T12:06:00Z"
    },
    {
      sender: "Eve",
      message: "I just stayed at home and caught up on some reading.",
      timestamp: "2023-03-05T12:08:00Z"
    },
    {
      sender: "Alice",
      message: "That sounds relaxing. Hey, has anyone tried that new Thai restaurant on Main Street?",
      timestamp: "2023-03-05T12:10:00Z"
    },
    {
      sender: "Bob",
      message: "No, I haven't. Is it any good?",
      timestamp: "2023-03-05T12:12:00Z"
    },
    {
      sender: "Charlie",
      message: "I've been there before. It's pretty good, but the portions are kind of small.",
      timestamp: "2023-03-05T12:14:00Z"
    },
    {
      sender: "Dave",
      message: "Yeah, I went there last week. The food was good, but it was a little pricey.",
      timestamp: "2023-03-05T12:16:00Z"
    },
    {
      sender: "Eve",
      message: "I haven't tried it yet, but I'd be down to go this weekend if anyone else is interested.",
      timestamp: "2023-03-05T12:18:00Z"
    }
  ];
  
const renderChat = (props) => {
    const { index } = props;
    return (
      <ListItem
        sx={{
          borderRadius: 200,
          bgcolor: index % 2 === 0 ? "#009A17" : "#011627",
          display: "flex",
          alignItems: "center",
          width: "50%",
          ml: index % 2 === 0 ? "0%" : "50%"
        }}
        key={index}
        component="div"
        disablePadding
      >
        <ListItemButton sx={{ textAlign: index % 2 === 0 ? "start" : "end", color: '#FDFFFC' }}>
          <ListItemText primary={chat[index].message} />
        </ListItemButton>
      </ListItem>
    );
  }
export default ChatDetail;