import React, { useState, useRef, useEffect } from 'react';
import sporService from '../../services/SportService';
import { useAuth } from '../../contexts/AuthContext';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Autocomplete from '@mui/material/Autocomplete';
import canHaveService from '../../services/CanHaveService';
import userMetricService from '../../services/UserMetricService';
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CircularProgress } from '@mui/material';
import Alert from '@mui/material/Alert';
import Navbar from '../navbar/navbar';

const SetupProfile = () => {

    const navigate = useNavigate();
    const [sports, setSports] = useState([]);
    // TODO: Have to use Redux to fix this issue.
    const {currentUserId} = useAuth();
    const selectedSports = useRef([]);
    const [errormsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCompleteSetup = (event) => {
        setLoading(true);
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
    
        const userMetricRequestBody = {
          "user_id": currentUserId,
          "rating": 0,
          "bio": formData.get('bio'),
          "level_of_expertise": "Beginner"
        };
    
        userMetricService.createUserMetric(userMetricRequestBody)
        .then((usermetric) => {
          for(let i=0; i<selectedSports.current.length; i++){
            const addUserSportRequestBody = {
              "user_metric_id": usermetric.data['id'], 
              "skill_id": selectedSports.current[i]['id']
            }
            
            canHaveService.addUserSport(addUserSportRequestBody)
            .then(() => {})
            .catch((error) => {
                setErrorMsg(error.message);
            })
          }
          setLoading(false);
          navigate('/profile', { replace: true });
        })
        .catch((error) => {
          setErrorMsg(error.message);
        })
        
    }
    
    useEffect(() => {
    sporService.getAllSports()
    .then((sports) => {
        setSports(sports.data);
    })
    .catch((error) => {
        
    })
    }, []);

    return(
    <>
      <Navbar authenticated={true}/>
      <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={12} md={12} sx={{mt: 7}}>
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
            Setup Profile
          </Typography>
          {errormsg && <Alert severity="error">{errormsg}</Alert>}
          <Box component="form" onSubmit={handleCompleteSetup} sx={{ mt: 1, textAlign: 'center' }}>
          <TextField
              margin="normal"
              required
              fullWidth
              sx={{ width: 700}}
              id="bio"
              label="Bio"
              name="bio"
              autoComplete="bio"
              autoFocus
              multiline
              rows={4}
            />
            <Autocomplete
                fullWidth
                multiple
                required
                id="add-sport"
                name="add-sport"
                options={sports}
                getOptionLabel={(option) => option['sportName']}
                onChange={(e, value) => {selectedSports.current=value;}}
                defaultValue={[]}
                filterSelectedOptions
                renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search sports"
                    placeholder="Search ..."
                />
                )}
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              sx={{ mt: 3, mb: 2, width: 300 }}
              disabled={loading}
              startIcon={loading ? <CircularProgress size={21} color='inherit'/> : <CheckCircleIcon/>}
            >
              Complete Setup
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
    </>
    );
}

export default SetupProfile;