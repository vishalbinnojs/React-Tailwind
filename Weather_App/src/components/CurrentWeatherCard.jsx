import React from "react";
import {useSelector} from "react-redux"
const CurrentWeatherCard = () => {
   
  

     const current = useSelector(state=>state.weatherReducer.current)
     const loading = useSelector(state=>state.weatherReducer.loading)
     

      if(loading) return <p>Loading.....</p>
      if(!current) return null;
  return (
    <>
    <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">{current.name}</h2>
    <p>Temp: {(current.main.temp - 273.15).toFixed(1)}°C</p>
    <p>Humidity: {current.main.humidity}%</p>
    <p>Weather: {current.weather[0].main}</p>
    
  </div>
</div>
    </>
  )
};

export default CurrentWeatherCard;