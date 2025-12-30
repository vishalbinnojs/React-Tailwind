import React from "react";
import {useSelector} from "react-redux" 
const ForecastCard = () => {
  
  const forecast = useSelector(state=>state.weatherReducer.forecast)

  if(!forecast) return null;
  
  return (
    <>
    <div className="card bg-neutral text-neutral-content w-96">
  <div className="card-body items-center text-center">
    <h2 className="card-title">4 Day Forecast</h2>
   {forecast.map((item,index)=>(
    <p 
    key={index}
    className="py-2"
    >Date: {item.dt_txt} - Temp: {(item.main.temp - 273.15).toFixed(1)}°C </p>
   ))}
  </div>
</div>
    </>
  )
};

export default ForecastCard;
