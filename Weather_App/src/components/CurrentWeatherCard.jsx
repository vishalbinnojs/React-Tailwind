
import React from "react";
import { BsFillSunsetFill, BsFillSunriseFill } from "react-icons/bs";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { LuWind } from "react-icons/lu";
import { useSelector } from "react-redux";

const CurrentWeatherCard = () => {
  const current = useSelector(state=>state.weatherReducer.current)
  // console.log(current);
  const currentLoading = useSelector(state=>state.weatherReducer.currentLoading)
  
const sunrise = current?.sys?.sunrise;  
const sunset = current?.sys?.sunset
const timezone = current?.timezone;     

const sunriseTime = new Date((sunrise + timezone) * 1000).toLocaleTimeString("en-IN",{
    hour:'2-digit',
     minute:'2-digit',
     hour12:true,
     timeZone:"UTC"
})

  const sunsetTime = new Date((sunset + timezone) * 
1000).toLocaleTimeString('en-IN',
    {
        hour:'2-digit',
        minute:'2-digit',
        hour12:true,
        timeZone:"UTC"
    }
)
if(currentLoading) return <p className="text-center skeleton text-skeleton p-6">Loading...</p>

  return (
    <>
        <div className="card w-96 bg-base-200 card-md shadow-sm ">
       
          <div className="card-body flex flex-col gap-5">
            <h2 className="text-2xl text-center">{current?.name}</h2>
            <div className="flex justify-between items-center">
             <span className="text-xl flex flex-col items-center"><FaTemperatureLow size={40}/>
              {(current?.main?.temp - 273.15).toFixed(1)+" °C"}</span>
             <div className="flex flex-col gap-1">
                <span>Max: {(current?.main?.temp_max - 273.15).toFixed(1)+" °C"}</span>
                <span>Min: {(current?.main?.temp_min - 273.15).toFixed(1)+" °C"}</span>
                
             </div>
            </div>
            <div className="flex justify-between text-lg">
             <span > <BsFillSunriseFill size={40}/> {sunriseTime}</span>
             <span ><BsFillSunsetFill size={40}/>{sunsetTime}</span>
            </div>
      
            <div className="flex justify-between text-xl">
              <span><WiHumidity size={40}/>{current?.main?.humidity}%</span>
              <span><LuWind size={40}/>{current?.wind?.speed}km/h</span>
            </div>
          </div>
        </div>
   
    </>
  );
};

export default CurrentWeatherCard;
