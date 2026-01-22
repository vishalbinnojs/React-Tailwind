// import React,{useState,useEffect ,useRef} from "react";

// const UseRef = () => {
//   // useRef is a Hook that returns a mutable ref object whose current property persists(hold prev value) across renders.
//   // Two main uses of useRef (a) Accessing DOM Elements (b) Storing mutable values without re-renders
//   //  const inputRef = React.useRef(null);
//   const redBox = React.useRef(null);
//   let normalVar = 0;

//   const [count,setCount] = useState(0)
//   console.log("Count",count);

//   const refVar = useRef(0)
//   console.log(refVar)

//   const handleClick = () => {
//     // inputRef.current.focus()
//     redBox.current.innerHTML = "Green Box";
//     redBox.current.style.backgroundColor = "Green";
//     redBox.current.style.borderRadius = "50%";
//   };

//   useEffect(()=>{

//     console.log("re-render hua");
//   })

//   const handleIncrement = () => {
//     normalVar += 1;
//     console.log("Normal var",normalVar);
// setCount(count+1)
// refVar.current += 1;
//   }

//   return (
//     <>
//       <div className="flex flex-col gap-4 items-center my-4">
//         {/* <input type="text" placeholder="Enter Name" className="p-2 focus:outline-none focus:border-4 border-double" ref={inputRef}/>
//  <button className="bg-red-500 rounded py-1 px-2 cursor-pointer text-gray-100 font-bold"
//  onClick={handleClick}>Focus</button>*/}

//         <div className="bg-red-500 h-50 w-50 text-center" ref={redBox}></div>
//         <button
//           className="bg-red-500 rounded py-1 px-2 cursor-pointer text-gray-100 font-bold"
//           onClick={handleClick}
//         >
//           Click Me to see Effects
//         </button>
//       </div>
//       <hr />
//       <hr />
//       <div className="flex flex-col gap-4 items-center my-4">
//         <span>Normal Variable:{normalVar}</span>
//         <span>useState:{count}</span>
//         <span>useRef:{refVar.current}</span>
//         <button
//           className="bg-red-500 rounded py-1 px-2 cursor-pointer text-gray-100 font-bold"
//           onClick={handleIncrement}
//         >
//           Increment
//         </button>
//       </div>
//     </>
//   );
// };

// export default UseRef;

import React, { useEffect, useState, useRef } from "react";
// Question: Generate a random number and count the re-render
const UseRef = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [count,setCount] = useState(0)
  // const  [renderCount, setRenderCount] = useState(0)
  
  //  We can't use useState here because when the component mounts useEffect will render the page and to record the count we have to set the renderCount in useEffect which will further render the component and the loop goes on.

  // To store the re-render count you have to use useRef hook which do not re-render the component when count changes and also it persist the value across re-renders.
 const renderCountRef = useRef(0);
 console.log(renderCountRef);
 
  const generateRandomNumber = () => {
    const number = Math.floor(Math.random()*100);
    setRandomNumber(number);
  };
  useEffect(()=>{
    console.log("useEffect runs after component Mounts....")
    // setRenderCount(renderCount+1)
    renderCountRef.current+=  1;
    console.log(renderCountRef);
    
  },[randomNumber])
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-3 h-screen">
        <h1 className="font-bold text-2xl">Random Number: {randomNumber}</h1>
        {/* <h2 className="font-bold text-xl">Render Count: {renderCount}</h2> */}
        <h2 className="font-bold text-xl">Render Count: {renderCountRef.current}</h2>
        <button
          className="bg-red-500 rounded-xl py-2 px-3 cursor-pointer text-gray-100 font-medium border-2 border-zinc-600"
          onClick={generateRandomNumber}
        >
          Generate Random Number
        </button>
        
        <h2 className="font-bold text-xl"> Count: {count}</h2>
        <button
          className="bg-red-500 rounded-xl py-2 px-3 cursor-pointer text-gray-100 font-medium border-2 border-zinc-600"
          onClick={()=>setCount(count+1)}
        >
          Count
        </button>
      </div>
    </>
  );
};

export default UseRef;
