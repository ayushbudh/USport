import React, { useState, useEffect } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useAuth } from '../../contexts/AuthContext';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatDetail = ({ groupChatId, setCurrentPage }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [seenChatIds, setSeenChatIds] = useState([]);
  const { currentUserId } = useAuth();
  const [user, setUser] = useState(null);

  useEffect(() => {
      fetch(`http://localhost:8080/api/user/userById/${currentUserId}`)
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
          console.log(data.first_name);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [currentUserId]);

  useEffect(() => {
    const socket = new SockJS('http://localhost:8080/chat');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
        const topic = `/topic/messages/${groupChatId}`;
        console.log('Subscribing to chat topic:', topic);
        stompClient.subscribe(topic, (response) => {
        const message = JSON.parse(response.body);
        if (!seenChatIds.includes(message.chatID)) {
          setMessages((messages) => [...messages, message]);
          setSeenChatIds((ids) => [...ids, message.chatID]);
        }
      });
    });

    setSocket(socket);
    setStompClient(stompClient);

    return () => {
      if (socket && socket.readyState === WebSocket.OPEN) {
        stompClient.disconnect();
      }
    };
  }, [seenChatIds]);

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(null, args);
      }, delay);
    };
  };

  const debouncedSendMessage = debounce(() => {
    setIsSending(true);
    stompClient.send('/app/chat', {}, JSON.stringify({
      message: message,
      groupChatID: groupChatId,
      fromUserID: currentUserId,
    }));
    setMessage('');
    setIsSending(false);
  }, 200);

  const sendMessage = () => {
    if (stompClient && !isSending) {
      debouncedSendMessage();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  };

  const handleBackButtonClick = () => {
    setCurrentPage(1);
  };

return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center', position: 'relative' }}>
    <IconButton aria-label="Back button Icon" onClick={handleBackButtonClick} style={{ position: 'absolute', top: '25px', left: '30px' }}>
      <Avatar src={'https://i.imgur.com/f6Uve0Z.png'} />
    </IconButton>
    <div style={{ width: '50%', height: '50%', overflowY: 'auto', padding: '10px', border: '1px solid black' }}>
      {messages.map((message, index) => (
        <div key={index} style={{ display: 'flex', justifyContent: message.fromUserID === currentUserId ? 'flex-start' : 'flex-end', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ backgroundColor: message.fromUserID === currentUserId ? '#4CAF50' : '#f2f2f2', color: message.fromUserID === currentUserId ? 'white' : 'black', padding: '10px', borderRadius: '10px' }}>
            {message.fromUserID !== currentUserId && <div style={{ marginBottom: '5px', fontSize: '14px' }}>{`${user.first_name} ${user.last_name}`}</div>}
            <div>{message.message}</div>
          </div>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px', width: '50%' }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={sendMessage} sx={{ minWidth: '50px' }}>
        <SendIcon />
      </Button>
    </div>
  </div>
);

};

export default ChatDetail;

