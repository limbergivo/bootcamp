import React from "react";
import useData from "../utils/useData";


const WeatherApp = () => {
    const { response, loading, error } = useData();
    console.log(response.map(location => location.location), 'response');
    return <div>{response.current}</div>


}



export default WeatherApp