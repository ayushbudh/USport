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
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const Navbar = ({authenticated}) => {

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const routeToPage = (url) => {
    navigate(url);
  }
  const handleOpenUserMenu = (event) => {
    console.log(event.currentTarget)
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (url) => {
    setAnchorElUser(null);
    navigate(url);
  };

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
            href={authenticated ? "/home": "/"}
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
                <Tooltip title="Open chats">
                  <IconButton aria-label="Chats" onClick={()=>routeToPage("/chat")}>
                    <ChatBubbleIcon  sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open notifications" onClick={()=>routeToPage("/notification")}>
                  <IconButton aria-label="Notifications">
                    <NotificationsIcon sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <AccountCircleIcon sx={{ display: { md: 'flex' }, fontSize: 30, color: '#FF9F1C' }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem key={1} onClick={()=>handleCloseUserMenu("/profile")}>
                      <Typography textAlign="center">Profile</Typography>
                  </MenuItem>
                  <MenuItem key={2} onClick={()=>handleCloseUserMenu("/myaccount")}>
                      <Typography textAlign="center">My Account</Typography>
                  </MenuItem>
                  <MenuItem key={3} onClick={()=>handleCloseUserMenu("/signin")}>
                      <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </>:
              <>
                <Button variant="contained" color="secondary" onClick={()=>routeToPage("/signup")}>
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