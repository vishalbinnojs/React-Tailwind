
import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrent, fetchForecast } from "./store/action/weatherAction";
import Search from "./components/Search"
import CurrentWeatherCard from "./components/CurrentWeatherCard"
import ForecastCard from "./components/ForecastCard"
function App() {
  let city = useSelector((state) => state.weatherReducer.city);
  console.log(city);
  
  // const forecastLoading = useSelector(state=>state.weatherReducer.forecastLoading)
  
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCurrent((city = "Delhi")));
  }, []);
  
  const nextDaysForecast = () => {
    console.log(city);
    
    dispatch(fetchForecast((city)));
  }

  return (
    <>
      <div className="flex flex-col justify-center  items-center p-10 text-center">
        <div className="sticky top-0 z-10 flex flex-col gap-4 bg-base-100 w-96 px-5 py-10">
          <h1 className="text-3xl animate-pulse">Weather Dashboard</h1>
          <Search />
        </div>
        <div className=" flex flex-col gap-6">
          <CurrentWeatherCard />
         <button className="btn btn-outline btn-success"
            onClick={nextDaysForecast}
         >
         Next Five Day Forecast
        </button>
          { <ForecastCard />}
        </div>
      </div>
    </>
  );
}

export default App;
