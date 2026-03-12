import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrent, setCity } from "../store/action/weatherAction";

const Search = () => {
  const city = useSelector((state) => state.weatherReducer.city);
  const dispatch = useDispatch();

  const handleInput = (e) => {
    const query = e.target.value;
    dispatch(setCity(query));
  };
  const handleQuery = () => {
    if (!city.trim()) {
      alert("Enter a valid city!");
      return;
    }
    dispatch(fetchCurrent(city));
  };
  return (
    <>
      <div className="flex join">
        <input
          type="text"
          placeholder="Enter City"
          className="input flex-1"
          value={city}
          onChange={handleInput}
        />
        <button
          onClick={handleQuery}
          className="btn btn-outline btn-success join-item"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default Search;
