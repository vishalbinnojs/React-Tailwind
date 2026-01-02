import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  changeByValue,
} from "../features/counter/counterSlice.js";
const Counter = () => {
  const [newValue, setNewValue] = React.useState(0);
  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleChangeByValue = () => {
    dispatch(changeByValue(Number(newValue)));
  };


  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={handleIncrement}>Increment from Counter</button>
      <button onClick={handleDecrement}>Decrement from Counter</button>
      <br />
      <br />

      <input type="number" onChange={(e) => setNewValue(e.target.value)} />
      <button onClick={handleChangeByValue}>Change Value</button>
    </>
  );
};

export default Counter;
