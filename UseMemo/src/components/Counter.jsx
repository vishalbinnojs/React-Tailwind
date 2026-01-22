import React, { useLayoutEffect } from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);
  const [quantity,setQuantity] = React.useState(1)
 
  
  const expensiveTask = () => {
    for (let i = 0; i < 2000000000; i++) {}
    return 20;
  };

  const memoizedValue = React.useMemo(() => {
    const result = expensiveTask();
    return result;
  }, [quantity]);
 
  // expensive Task will re-compute only when quantity state is changed, otherwise it will be memoized 

  return (
    <>
      <h1>MemoizedValue:{memoizedValue}</h1>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
      <button onClick={() => setQuantity(quantity + 1)}>Quantity is {quantity}</button>
    </>
  );
};

export default Counter;
