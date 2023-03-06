import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const CreateStatus = () =>{
    const [status, setStatus] = useState(true);

    return(
        <Box p={5}>
            <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Status</Typography>
            <Box mt={30} ml={20} mr={20} p={3} sx={{ display:'flex', flexDirection: 'column', alignItems: 'center',
                boxShadow: '0px 2px 18px rgba(0, 0, 0, 0.1);'}}>
                {status ?
                    <>
                        <Typography sx={{ fontWeight: 'bolder', mb: 4}} variant="h5">Event Created!</Typography>
                        <Avatar src={'https://i.imgur.com/RQxype8.png'} sx={{ mb: 2 }} />
                        <Typography variant='subtitle1'>Your game has been created successfully and the players you added will receive notification.</Typography>
                    </>
                : <>
                <Typography sx={{ fontWeight: 'bolder', mb: 4}} variant="h5">Game Creation Failed</Typography>
                <Avatar src={'https://i.imgur.com/laZzWq7.png'} sx={{ mb: 2 }}/>
                <Typography variant='subtitle1'>Your game was not created due to some issue. Please try 
again!</Typography>
            </>}
            </Box>
        </Box>
    );
}

export default CreateStatus;