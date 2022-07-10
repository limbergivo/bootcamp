import axios from 'axios';
import { useState, useEffect } from 'react';


const useData = () => {

    const [response, setResponse] = useState([]);
    const [error, setError] = useState('');
    const [loading, setloading] = useState(true);

    const fechtWeatherData = () => {
        axios.get('https://api.weatherapi.com/v1/current.json?', { params: { key: 'be7ec9bfe1a743deabc202618220707', q: 'Maasmechelen', aqi: 'no' } })
            .then(res => {
                setResponse(res.data);
                console.log(res.data, 'data');
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

    return { response, error, loading };
}

export default useData;