import React from 'react'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HubIcon from '@mui/icons-material/Hub';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import Play from './play';
import Connect from './connect';
import Ranking from './ranking';
import Navbar from '../navbar/navbar';

const Home = () => {
    const [value, setValue] = React.useState(0);

     return(
        <>
            <Navbar authenticated={true}/>
            <Box>
                {value === 0 ?  <Play/> : value === 1 ? <Connect/> : <Ranking/> }
                <BottomNavigation
                    position="fixed" color="primary" sx={{ position: 'fixed', left: 250, right: 250, top: 'auto', bottom: 10, 
                    boxShadow: '0px 0px 10px grey', borderRadius: 5 }}
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Play" icon={<SportsSoccerIcon />} />
                    <BottomNavigationAction label="Connect" icon={<HubIcon />} />
                    <BottomNavigationAction label="Ranking" icon={<EmojiEventsIcon />} />
                </BottomNavigation>
            </Box>
        </>
     );
}

export default Home;