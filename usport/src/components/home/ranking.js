import React from 'react'
import Board from "./board";
import Box from '@mui/material/Box';

const Ranking = () => {
    return(
        <Box id="main" mt={13} pb={40}>
            <Board></Board>
        </Box>
    );
}

export default Ranking;