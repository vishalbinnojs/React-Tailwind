import React,{useState} from "react";

const Alpha = () => {
    const [count, setCount] = useState(0)
    React.useEffect(()=>{
        console.log("alpha mounts....");
        return ()=>{
            // runs on Alpha unmounts
            console.log("unmounting....");
            
        }
    },[])
    // you have to make seperate useEffect, if you want to run update logic
    // React.useEffect(()=>{
    //     console.log("alpha update....");
        
    // },[count])
  return (
    <>
    <h1>Alpha</h1>
      <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
};

export default Alpha;
