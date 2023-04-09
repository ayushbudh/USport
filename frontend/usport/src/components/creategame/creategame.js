import React, { useState } from 'react'
import FieldInformation from './fieldinformation';
import Create from './create';
import Navbar from '../navbar/navbar';
import { useLocation } from 'react-router-dom';

const CreateGame = () => {
    const [page, setCurrentPage] = useState(1);
    const {state} = useLocation();
    return (
        <>
            <Navbar authenticated={true}/>
            {page === 1 ? <FieldInformation props={{setCurrentPage: setCurrentPage, data: state ? state['fieldData'] : null}}/> 
            : page === 2 ? <Create props={{setCurrentPage: setCurrentPage, data: state ? state['fieldData'] : null}}/> 
            : <></>}
        </>
    );
}

export default CreateGame;