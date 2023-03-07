import  React, { useState } from 'react';
import ChatDetail from './chatdetail';
import ChatList from './chatlist';
import Navbar from '../navbar/navbar';
const Chat = () => {
    const [page, setCurrentPage] = useState(1);
    return(
        <>
            <Navbar authenticated={true}/>
            { page  === 1 ? <ChatList setCurrentPage={setCurrentPage}/> : <ChatDetail setCurrentPage={setCurrentPage}/> }
        </>
    );
}

export default Chat;