import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { FixedSizeList } from "react-window";
import Box from '@mui/material/Box';
import { useAuth } from '../../contexts/AuthContext';
import axios from "axios";

const ChatList = ({ setCurrentPage }) => {
  const { currentUserId } = useAuth();
  const [chats, setChats] = React.useState([]);

  React.useEffect(() => {
    axios.get(`http://localhost:8080/api/chat/chatList?currentUserId=${currentUserId}`)
      .then(response => {
        setChats(response.data.map(chatId => ({
          id: `chat${chatId}`,
          title: `Chat ${chatId}`,
          groupChatId: chatId
        })));
      })
      .catch(error => console.log(error));
  }, [currentUserId]);

  function handleOpenChatClick(chat) {
    setCurrentPage(2, { chatId: chat.id, groupChatId: chat.groupChatId });
  }

  return (
    <Grid container pl={4} pr={4} pb={4} pt={3}>
      <Grid
        item
        xs={12}
        mb={4}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography sx={{ fontWeight: "bolder" }} variant="h4">
          Chats
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          sx={{
            backgroundColor: "#F8F4F4",
            p: 5,
            borderRadius: 5,
          }}
        >
          <FixedSizeList
            height={400}
            width={460}
            itemSize={50}
            itemCount={chats.length}
            overscanCount={5}
            itemData={{
              handleOpenChatClick: handleOpenChatClick,
              chats: chats,
            }}
          >
            {renderRow}
          </FixedSizeList>
        </Box>
      </Grid>
    </Grid>
  );
};

const renderRow = (props) => {
  const { index, data } = props;

  const chat = data.chats[index];
  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton onClick={() => data.handleOpenChatClick(chat)}>
        <ChatBubbleOutlineIcon />
        <Typography pl={1}>{chat.title}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default ChatList;
