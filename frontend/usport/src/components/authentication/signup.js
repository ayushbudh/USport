import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import { useNavigate } from "react-router-dom";

const theme = createTheme({
    palette: {
      primary: {
        main: '#009A17',
      },
    },
  });

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      firstName: data.get('firstName'),
      lastName: data.get('lastName')
    });
  };

  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/home');
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Grid item xs={12} sm={8} md={6} component={Paper} elevation={6} square>
        <Box sx={{
              my: 3,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
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
          </Box>
          <Box
            sx={{
              boxShadow: '0px 2px 18px rgba(0, 0, 0, 0.1)',
              borderRadius: 2,
              p: 5,
              my: 1,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5"
            sx={{
              color: '#009A17',
              fontSize: 30,
              fontWeight: 400,
              mb: 4
            }}>
              Create Account
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                autoFocus
              />
            <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                color="primary"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignup}
              >
                Sign Up
              </Button>
              <Typography  sx={{ textAlign: 'center'}}>OR</Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <IconButton aria-label="Google Icon">
                        <Avatar src={'https://i.imgur.com/g9TqmFu.png'} />
                    </IconButton>
                    <IconButton aria-label="Google Icon">
                        <Avatar src={'https://i.imgur.com/HSnMjVr.png'} />
                    </IconButton>
                </Box>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    }}>
                    <Typography  sx={{mr: 1}} variant="body2">Already have an account? </Typography>
                    <Link href="/signin" variant="body2">
                        {" Sign In"}
                    </Link>
                </Box>
            </Box>
          </Box>
        </Grid>
        <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
                backgroundImage: 'url(https://i.imgur.com/8vdDHAV.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
      </Grid>
      </ThemeProvider>
  );
}

export default Signup;