import React, { useState, useEffect } from 'react';
import Stomp from 'stompjs';
import SockJS from 'sockjs-client';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const ChatDetail = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const [isSending, setIsSending] = useState(false);
  const [seenChatIds, setSeenChatIds] = useState([]);

  useEffect(() => {
    // Connect to the WebSocket server
    const socket = new SockJS('http://localhost:8080/chat');
    const stompClient = Stomp.over(socket);

    stompClient.connect({}, () => {
      stompClient.subscribe('/topic/messages/123', (response) => {
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
      // Disconnect from the WebSocket server on unmount
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
      groupChatId: 123,
    }));
    setMessage('');
    setIsSending(false);
  }, 1000);

  const sendMessage = () => {
    if (stompClient && !isSending) {
      debouncedSendMessage();
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', justifyContent: 'center' }}>
      <div style={{ width: '50%', height: '50%', overflowY: 'auto', padding: '10px', border: '1px solid black' }}>
        {messages.map((message, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ backgroundColor: '#f2f2f2', padding: '10px', borderRadius: '10px' }}>
              <div style={{ marginBottom: '5px', fontSize: '14px' }}>{`User ${message.fromUserID}`}</div>
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
        />
        <Button onClick={sendMessage} sx={{ minWidth: '50px' }}>
          <SendIcon />
        </Button>
      </div>
    </div>
  );
};

export default ChatDetail;
