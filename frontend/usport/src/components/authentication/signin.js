import React, { useState } from 'react';
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
import Alert from '@mui/material/Alert';
import { useAuth } from '../../contexts/AuthContext';
import { CircularProgress } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';

const theme = createTheme({
    palette: {
      primary: {
        main: '#009A17',
      },
    },
  });

const Signin = () => {

  const navigate = useNavigate();
  const [errormsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signInUser } = useAuth();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try{
      await signInUser(formData.get('email'), formData.get('password'));
      setLoading(false);
      navigate('/home');
    }catch(error){
        const errorMessage = error.message;
        setLoading(false);
        setError(true);
        setErrorMsg(errorMessage);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
            item
            xs={false}
            sm={4}
            md={6}
            sx={{
                backgroundImage: 'url(https://i.imgur.com/soNXiXO.png)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            />
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
              my: 8,
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
              Sign In
            </Typography>
            {error && <Alert severity="error">{errormsg}</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
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
                disabled={loading}
                sx={{ mt: 3, mb: 2 }}
                startIcon={loading ? <CircularProgress size={21} color='inherit'/> : <LoginIcon/>}
              >
                Sign in
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
                    <Typography  sx={{mr: 1}} variant="body2">Don't have an account? </Typography>
                    <Link href="/signup" variant="body2">
                        {" Sign Up"}
                    </Link>
                </Box>
            </Box>
          </Box>
        </Grid>
        </Grid>
      </ThemeProvider>
  );
}

export default Signin;