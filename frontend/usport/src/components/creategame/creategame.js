import React, { useState } from 'react'
import FieldInformation from './fieldinformation';
import Create from './create';
import CreateStatus from './createstatus';
import Navbar from '../navbar/navbar';

const CreateGame = () => {
    const [page, setCurrentPage] = useState(1);
    return (
        <>
            <Navbar authenticated={true}/>
            {page === 1 ? <FieldInformation setCurrentPage={setCurrentPage}/> 
            : page === 2 ? <Create setCurrentPage={setCurrentPage}/> 
            : <CreateStatus setCurrentPage={setCurrentPage}/>}
        </>
    );
}

export default CreateGame;