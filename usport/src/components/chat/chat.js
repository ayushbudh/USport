import  React, { useState } from 'react';
import ChatDetail from './chatdetail';
import ChatList from './chatlist';

const Chat = () => {
    const [page, setCurrentPage] = useState(1);
    return(
        <>
            { page  === 1 ? <ChatList setCurrentPage={setCurrentPage}/> : <ChatDetail setCurrentPage={setCurrentPage}/> }
        </>
    );
}

export default Chat;