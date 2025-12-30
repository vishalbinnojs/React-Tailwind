import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { fetchWeather } from "./store/action/weatherAction";
import Search from "./components/Search";
import CurrentWeatherCard from "./components/CurrentWeatherCard";
import ForecastCard from "./components/ForecastCard";

function App() {
  // const state = useSelector((state) => state.weatherReducer);
  // console.log(state);

  const city = useSelector((state) => state.weatherReducer.city);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather(city));
    console.log("useEffect api hit");
  }, []);

  return (
    <>
      <div className="flex flex-col gap-10 justify-center  items-center p-10 text-center">
        <div className="sticky top-0 z-10 flex flex-col gap-4 bg-base-100 w-96 px-5 py-10">

        <h1 className="text-3xl">Weather Dashboard</h1>
        <Search />
        </div>
        <div className=" flex flex-col gap-6">
          <CurrentWeatherCard />
          <ForecastCard />
        </div>
      </div>
    </>
  );
}

export default App;
