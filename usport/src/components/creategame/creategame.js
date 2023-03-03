import React, { useState } from 'react'
import FieldInformation from './fieldinformation';
import Create from './create';
import CreateStatus from './createstatus';

const CreateGame = () => {
    const [page, setCurrentPage] = useState(1);
    return (
        <>
            {page === 1 ? <FieldInformation setCurrentPage={setCurrentPage}/> 
            : page === 2 ? <Create  setCurrentPage={setCurrentPage}/> 
            : <CreateStatus  setCurrentPage={setCurrentPage}/>}
        </>
    );
}

export default CreateGame;