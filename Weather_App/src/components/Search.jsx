import React from "react";
import { fetchWeather, setCity } from "../store/action/weatherAction";
import { useDispatch, useSelector } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weatherReducer.city);


  const handleInput = (e) => {
    const value = e.target.value;
    // console.log(value);
      dispatch(setCity(value));
  };

  const handleSearch = () =>{
    dispatch(fetchWeather(city))
    dispatch(setCity(''))
  }

  return (
    <>
      <div className="join">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            required
            placeholder="Search"
            value={city}
            onChange={handleInput}
          />
        </label>

        <button
        onClick={handleSearch} 
        className="btn btn-info join-item">Search</button>
      </div>
    </>
  );
};

export default Search;
