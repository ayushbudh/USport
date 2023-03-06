import  * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { useNavigate } from "react-router-dom";

const Navbar = ({authenticated}) => {

  const navigate = useNavigate();
  const handleGetStarted = () => {
    navigate('/signup');
  }

  return (
    <AppBar position="static" color="transparent"
    sx={{
      boxShadow: '0px 0px 0px 0px white'
    }}>
      <Container maxWidth="xl">
        <Toolbar>
          <SportsSoccerIcon sx={{ display: { md: 'flex' }, mr: 1, fontSize: 50, color: '#FF9F1C' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: '#009A17',
              fontSize: 32,
              fontWeight: 700,
              textDecoration: 'none',
              flexGrow: 1
            }}
          >
            USport
          </Typography>
            {authenticated ? 
              <>
                <IconButton aria-label="Chat">
                  <ChatBubbleIcon sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                </IconButton>
                <IconButton aria-label="Notification">
                  <NotificationsIcon sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                </IconButton>
                <IconButton aria-label="Account">
                  <AccountCircleIcon sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                </IconButton>
              </>:
              <>
                <Button variant="contained" color="secondary" onClick={handleGetStarted}>
                    Get Started
                </Button>
              </>
            }
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;