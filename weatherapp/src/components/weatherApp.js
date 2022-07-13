import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import NavigationIcon from '@mui/icons-material/Navigation';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
const WeatherApp = () => {



    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fechtWeatherData = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?', { params: { key: 'be7ec9bfe1a743deabc202618220707', q: 'Maasmechelen', aqi: 'no' } })
            .then(res => {
                setResponse(res.data);
                console.log(res.data);
                setloading(false);
            }).catch(err => {
                setError(err);
            }).finally(() => {
                setloading(false);
            });
    }
    useEffect(() => {
        fechtWeatherData();
    }, []);


    console.log(response);
    const weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const d = new Date();
    const day = weekday[d.getDay()].slice(0, 2);
    const monthArray = ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"];
    const month = monthArray[d.getMonth()];
    const date = d.getDate();



    return (
        <>
            <div style={{ display: "flex", width: '100%', justifyContent: "center" }}>

                <Card sx={{ minWidth: 275 }} style={{ backgroundColor: "#dbe0e4" }}>
                    <CardContent>


                        <Typography style={{ fontSize: "28px", color: '#48b0ed' }}>
                            {day}
                        </Typography>
                        <Typography style={{ fontSize: "18px", color: '#48b0ed' }}>
                            {date} {month}
                        </Typography>
                        <CardMedia
                            component="img"
                            height="194"
                            image="/HBL.png"
                            alt=""
                        />
                        <br></br>
                        <Typography style={{ fontWeight: "bold", fontSize: "20px", color: '#48b0ed' }}>
                            {response.current && response.current.temp_c} | {response.location && response.location.name}
                        </Typography>

                        <Typography component="div" style={{ color: "#a3a4a4" }} >
                            <Divider />
                            <div style={{ display: "flex", justifyContent: 'space-between' }}>
                                <Typography component="div" > <InvertColorsIcon fontSize="small" /> {response.current && response.current.humidity}% </Typography>  <Typography component="div" >  < NavigationIcon fontSize="small" /> {response.current && response.current.wind_dir} {response.current && response.current.wind_kph} </Typography>
                            </div>
                            <Divider />
                        </Typography>


                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {response.current && response.current.feelslike_c}
                        </Typography>
                    </CardContent>
                </Card>


            </div>
        </>
    )


}



export default WeatherApp