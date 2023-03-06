import React, { useState } from 'react'
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
import Select from '@mui/material/Select'
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Create = ({setCurrentPage}) => {
    const [sport, setSport] = useState(1);
    const [dateTime, setDateTime] = useState(dayjs('2023-03-4T21:11:54'));

    const handleDateTimeChange = (newDateTime) => {
        setDateTime(newDateTime);
    }

    const handleBackButtonClick = () =>{
        setCurrentPage(1);
    }
    const handleNextButtonClick = () => {
        setCurrentPage(3);
    }
    const handleSportChange = (event) => {
        setSport(event.target.value);
    };

    return (
        <Grid container pl={4} pr={4} pb={4} pt={3}>
            <Grid item xs={8} lg={7} xl={7} md={7} mb={4} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <IconButton aria-label="Back button Icon" onClick={handleBackButtonClick}>
                        <Avatar src={'https://i.imgur.com/f6Uve0Z.png'} />
                </IconButton>
                <Typography sx={{ fontWeight: 'bolder', textAlign: 'center'}} variant="h4">Create Game</Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Grid item xs={5} lg={4} p={1}>
                    <Typography variant="h4">Green Park</Typography>
                    <Typography variant="h6" sx={{display: 'flex'}}><LocationOnIcon sx={{fontSize: 25}}/>33 Gilmer Street SE, Atlanta, GA, 30303</Typography>
                </Grid> 
                <Grid item xs={2} sx={{display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Box
                    component="img"
                    src="https://i.imgur.com/27J8sXS.png"
                    width={400}/>
                </Grid>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center',  mt: 2, ml: 15, mr: 15}}>
                <Typography variant="subtitle1" fontWeight={700}>Select Game Type</Typography>
                <FormControl sx={{width: 600}}>
                    <InputLabel id="demo-simple-select-label">Game Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sport}
                        label="Game Type"
                        onChange={handleSportChange}
                    >
                        <MenuItem value={1}>Football</MenuItem>
                        <MenuItem value={2}>Soccer</MenuItem>
                        <MenuItem value={3}>Baseball</MenuItem>
                    </Select>
                </FormControl>                
                <Typography variant="subtitle1" fontWeight={700}>Add Players</Typography>
                <Box component={"form"} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 600, 
                    backgroundColor: '#F8F4F4', borderRadius: 5}}>
                    <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Players"
                        inputProps={{ 'aria-label': 'search players' }}
                    />
                </Box>
                <IconButton>
                    <AddCircleOutlineIcon sx={{ fontSize: 40}}/>
                </IconButton>
                <Typography variant="subtitle1" fontWeight={700}>Select Date and Time</Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DateTimePicker
                            label="Date & Time picker"
                            value={dateTime}
                            onChange={handleDateTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', flexDirection: 'row', justifyContent: 'center', mt: 2}}>
                <Button aria-label="Next button Icon" variant="contained" sx={{ backgroundColor: '#009A17'}} onClick={handleNextButtonClick}>Create</Button>            
            </Grid> 
        </Grid>
    );
}

export default Create;