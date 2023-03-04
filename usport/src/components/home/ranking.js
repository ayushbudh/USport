import React from 'react'
import { Leaderboard, Leaderboard2 } from "./database";
import Board from "./board";
import Box from '@mui/material/Box';

const Ranking = () => {
    return(
        <Box id="main">
            <Board></Board>
        </Box>
    );
}

export default Ranking;