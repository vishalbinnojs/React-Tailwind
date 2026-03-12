
import React from "react";
import { useSelector } from "react-redux";
import { FaTemperatureLow } from "react-icons/fa";
const ForecastCard = () => {
  const forecast = useSelector((state) => state.weatherReducer.forecast);
  const forecastLoading = useSelector(
    (state) => state.weatherReducer.forecastLoading,
  );

  if (forecastLoading)
    return <p className="text-center skeleton text-skeleton p-6">Loading...</p>;

  return (
    <>
      <div className="w-96">
        <div className="">
          {forecast?.list.map((item, i) => (
            <div
              className="bg-base-100 p-3 flex items-center justify-between rounded-xl hover:bg-base-300 hover:-translate-y-0.5 transition-all duration-300 transform-gpu cursor-pointer text-xl border-b-2"
              key={i}
            >
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-2">
                  <FaTemperatureLow />{" "}
                  {(item?.main?.temp - 273.15).toFixed(1) + " °C"}
                </span>
                <span>{item?.weather[0].description}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span>{new Date(item?.dt * 1000).toLocaleTimeString()}</span>
                <span>{new Date(item?.dt * 1000).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ForecastCard;
