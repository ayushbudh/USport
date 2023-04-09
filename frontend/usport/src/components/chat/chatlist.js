import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { FixedSizeList } from "react-window";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Box from '@mui/material/Box';
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 to generate unique ids

const ChatList = ({ setCurrentPage }) => {
  const chats = [
    {
      id: "123",
      title: "Game at 2:00 pm at the Green Park on 2 Mar 2023",
      avatarUrls: [
        "https://i.imgur.com/fdhlThj.jpg",
        "https://i.imgur.com/ID3xi0J.jpg",
        "https://i.imgur.com/ID3xi0J.jpg",
        "https://i.imgur.com/ID3xi0J.jpg",
        "https://i.imgur.com/ID3xi0J.jpg",
      ],
    }
  ];

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
            itemCount={1}
            overscanCount={5}
            itemData={{
              setCurrentPage: setCurrentPage,
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

  function handleOpenChatClick() {
    const chat = data.chats[index];
    data.setCurrentPage(2, chat.id);
  }
  return (
    <ListItem key={index} component="div" disablePadding>
      <ListItemButton onClick={handleOpenChatClick}>
        {index === 0 ? (
          <AvatarGroup max={3}>
            {data.chats[index].avatarUrls.map((url, i) => (
              <Avatar alt={`Avatar ${i}`} key={i} src={url} />
            ))}
          </AvatarGroup>
        ) : (
          <Avatar alt="Trevor Henderson" src={data.chats[index].avatarUrls[0]} />
        )}
        <Typography pl={1}>{data.chats[index].title}</Typography>
      </ListItemButton>
    </ListItem>
  );
};


export default ChatList;
