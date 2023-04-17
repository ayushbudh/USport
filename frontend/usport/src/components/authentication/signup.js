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
import userAccountService from '../../services/UserAccountService';
import LoginIcon from '@mui/icons-material/Login';
import { CircularProgress } from '@mui/material';

const theme = createTheme({
    palette: {
      primary: {
        main: '#009A17',
      },
    },
  });

const Signup = () => {
  
  const navigate = useNavigate();
  const [errormsg, setErrorMsg] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signupUser } = useAuth();

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try{
        const userCredential = await signupUser(formData.get('email'), formData.get('password'));
        const user = userCredential.user;
        try{
          await userAccountService.addUser(user.uid, formData.get("firstName"), 
              formData.get("lastName"), formData.get("email"), 19, false);
          setLoading(false);
          navigate('/home');
        }catch(error){
          const errorMessage = error.message;
          setLoading(false);
          setError(true);
          setErrorMsg(errorMessage);
        }
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
            {error && <Alert severity="error">{errormsg}</Alert>}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, textAlign: 'center' }}>
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
                disabled={loading}
                startIcon={loading ? <CircularProgress size={21} color='inherit'/> : <LoginIcon/>}
              >
                Sign Up
              </Button>
              <Typography  sx={{ textAlign: 'center'}}>OR</Typography>
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