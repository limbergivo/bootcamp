import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

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


    console.log(response.location && response.location.localtime);
    const weekday = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"];
    const d = new Date();
    const day = weekday[d.getDay()];


    return (
        <>
            <div>Datum: {day}</div>
            <div>Plaats: {response.location && response.location.name}</div>
            <div>Huidige temperatuur: {response.current && response.current.temp_c}</div>
            <div>Voelt aan als: {response.current && response.current.feelslike_c}</div>
        </>
    )


}



export default WeatherApp