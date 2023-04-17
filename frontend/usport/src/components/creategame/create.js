import React, { useEffect, useState, useRef } from 'react'
import dayjs from 'dayjs';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import userAccountService from '../../services/UserAccountService';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import gameService from '../../services/GameService';
import { useNavigate } from 'react-router-dom';

const Create = ({props}) => {
    const [sport, setSport] = useState("");
    const [players, setPlayers] = useState([]);
    const [sportoptions, setSportOptions] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const selectedPlayers = useRef([]);
    const startDateTime = useRef(dayjs(Date()));
    const endDateTime = useRef(dayjs(Date()));

    const handleBackButtonClick = () =>{
        props.setCurrentPage(1);
    }
    const handleSportChange = (event) => {
        setSport(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const requestBodyData = {
            gametype: formData.get('gametype'),
            players: selectedPlayers.current,
            startDateTime: new Date(startDateTime.current['$d']).toISOString(),
            endDateTime: new Date(endDateTime.current['$d']).toISOString(),
            fieldId: props.data['id']
        };
        const reservartionDateRange = "[" + requestBodyData.startDateTime + ", " + requestBodyData.endDateTime +"]" ;
        gameService.createGame(props.data['id'], formData.get('gametype'), reservartionDateRange)
        .then(()=>{
            navigate("/createstatus", { state: { isError: false, message: "Your game has been created successfully and the players you added will receive notification" } });
        })
        .catch((error) => {
            navigate("/createstatus", { state: { isError: true, message: "Your game was not created due to some issue. Please try again! Error message: " + error.message } });

        })

    } 
    useEffect(() => {
        setLoading(true);
        if(props.data){
            setSportOptions(props.data.sports);
        }
        userAccountService.getUserAccounts()
        .then((useraccounts) => {
            setPlayers(useraccounts.data);
        })
        .catch((error) => {
        })
        .finally(() => {
            setTimeout(() => {
                setLoading(false);
            },500);
        })
    }, [props.data])

    return (
        // TODO: Add more form validation before submission
        <Box component="form" onSubmit={handleSubmit}>
        <Grid container pl={4} pr={4} pb={4} pt={3}>
            <Grid item xs={8} lg={7} xl={7} md={7} mb={4} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton aria-label="Back button Icon" onClick={handleBackButtonClick}>
                        <Avatar src={'https://i.imgur.com/f6Uve0Z.png'} />
                </IconButton>
                <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Create Game</Typography>
            </Grid>
            {loading ? 
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', 
                                    justifyContent: 'center', mt: 30, ml: 10}}>
                <CircularProgress sx={{mr: 2}} />
                <Typography variant='h6'>Loading...</Typography>
            </Grid>:
            <>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={5} lg={4} p={1}>
                    <Typography variant="h4">{props.data['name']}</Typography>
                    <Typography variant="h6" sx={{display: 'flex'}}>
                    <LocationOnIcon sx={{fontSize: 25}}/>
                    {props.data["address"]["streetAddress"]}
                    </Typography>
                    <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                        {props.data["address"]["city"]},
                    </Typography>
                    <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                        {props.data["address"]["state"]},
                    </Typography>
                    <Typography variant="h6" sx={{display: 'flex', ml: 3}}>
                        {props.data["address"]["zipCode"]}
                    </Typography>
                </Grid> 
                <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Box
                    component="img"
                    src="https://i.imgur.com/27J8sXS.png"
                    width={400}/>
                </Grid>
            </Grid>
           <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2, ml: 45, mr: 5}}>
                <Typography variant="subtitle1" fontWeight={700}>Select Game Type</Typography>
                <FormControl fullWidth>
                    <InputLabel id="gametype">Game Type</InputLabel>
                    <Select
                        labelId="gametype"
                        id="gametype"
                        name="gametype"
                        value={sport}
                        required
                        label="Game Type"
                        onChange={handleSportChange}
                    >
                        {sportoptions.map((option, index) => {
                            return <MenuItem key={index+1} value={option['id']}>{option['sportName']}</MenuItem>
                        })}
                    </Select>
                </FormControl>                
            </Grid>
            <Grid item xs={3} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2}}>
                <Typography variant="subtitle1" fontWeight={700}>Add Players</Typography>
                <Autocomplete
                    fullWidth
                    multiple
                    required
                    id="add-players"
                    name="add-players"
                    options={players}
                    getOptionLabel={(option) => option.first_name + " " + option.last_name}
                    onChange={(e, value) => {selectedPlayers.current=value;}}
                    defaultValue={[]}
                    filterSelectedOptions
                    renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Players"
                        placeholder="Search ..."
                    />
                    )}
                />
           </Grid>
           <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2}}>
            <Typography variant="subtitle1" fontWeight={700}>Select Start Date and Time</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateTimePicker
                    fullWidth
                    label="Date & Time picker"
                    value={startDateTime.current}
                    onChange={(value) => {startDateTime.current=value}}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
           </Grid>
           <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2}}>
            <Typography variant="subtitle1" fontWeight={700}>Select End Date and Time</Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DateTimePicker
                    label="Date & Time picker"
                    value={endDateTime.current}
                    onChange={(value) => {endDateTime.current=value;}}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
           </Grid>
            <Grid item xs={2} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 2, ml: 69}}>
                <Button fullWidth aria-label="Create button" variant="contained" color='secondary'
                type="submit">Create</Button>            
            </Grid>
            </>}
        </Grid>
        </Box>
    );
}

export default Create;



// <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', mt: 2}}>
// <>
//     <Typography variant="subtitle1" fontWeight={700}>Select Date and Time</Typography>
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//         <DateTimePicker
//             label="Date & Time picker"
//             value={dateTime}
//             onChange={handleDateTimeChange}
//             renderInput={(params) => <TextField {...params} />}
//         />
//     </LocalizationProvider>
// </>
// <>

// </>
// </Grid>