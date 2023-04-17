import React, { useState } from 'react';
import ChatDetail from './chatdetail';
import ChatList from './chatlist';
import Navbar from '../navbar/navbar';

const Chat = () => {
  const [page, setCurrentPage] = useState(1);
  const [chatData, setChatData] = useState({ chatId: null, groupChatId: null });

  const handleSetCurrentPage = (index, chatData) => {
    setCurrentPage(index);
    setChatData(chatData);
  };

  return (
    <>
      <Navbar authenticated={true} />
      {page === 1 ? (
        <ChatList setCurrentPage={handleSetCurrentPage} />
      ) : (
        <ChatDetail groupChatId={chatData.groupChatId} setCurrentPage={handleSetCurrentPage} />
      )}
    </>
  );
};

export default Chat;
