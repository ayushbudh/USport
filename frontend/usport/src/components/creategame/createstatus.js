import React from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import { Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import ErrorIcon from '@mui/icons-material/Error';

const CreateStatus = () =>{
    const {state} = useLocation();
    const navigate = useNavigate();
    return(
        <>
        <Navbar authenticated={true}/>
        <Box p={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Status</Typography>
            {!state ? <Box sx={{display: 'flex', flexDirection: 'row', 
                    alignItems: 'center', justifyContent: 'center', mt: 5}}>
                    <ErrorIcon fontSize='large' color='error' sx={{ mr: 2}} />
                    <Typography variant="h5">Please select a field first from the play page.</Typography>
            </Box> : <Box mt={5} ml={20} mr={20} p={3} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center',
                boxShadow: '0px 2px 18px rgba(0, 0, 0, 0.1);'}}>
                {!state['isError'] ?
                    <>
                        <Typography sx={{ fontWeight: 'bolder', mb: 4}} variant="h5">Event Created!</Typography>
                        <Avatar src={'https://i.imgur.com/RQxype8.png'} sx={{ mb: 2 }} />
                        <Typography variant='subtitle1'>{state['message']}</Typography>
                    </>
                : <>
                <Typography sx={{ fontWeight: 'bolder', mb: 4}} variant="h5">Game Creation Failed</Typography>
                <Avatar src={'https://i.imgur.com/laZzWq7.png'} sx={{ mb: 2 }}/>
                <Typography variant='subtitle1'>{state['message']}</Typography>
            </>}
            </Box> }
            <Button sx={{ mt: 3}} startIcon={<KeyboardReturnIcon />} 
            color='secondary' variant='contained'
            onClick={()=>{navigate('/home')}}>Go Back to Home Page</Button>
        </Box>
        </>
    );
}

export default CreateStatus;