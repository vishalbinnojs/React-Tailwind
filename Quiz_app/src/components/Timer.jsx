import React,{useState, useEffect} from "react";

const Timer = ({setShowResult}) => {
    const [timeLeft,setTimeLeft] = useState(450)
 const [displayTime,setDisplayTime]= useState();
 
 //Time Logic
    useEffect(()=>{
      let intervalId =  setInterval(() => {
            setTimeLeft(prev => {
                if(prev <= 0){
                  // clearInterval from browser when it reaches to zero
                    clearInterval(intervalId)
                    return 0;
                } 
                return prev - 1;
            })
        },1000)
        // clear the interval on component unmounts
        return () => clearInterval(intervalId);
        
    },[])
    
    
    useEffect(()=>{
        // Formatted Time Logic
        if(timeLeft === 0){
          setShowResult(false);
        };
        let formattedTime = `${(Math.floor(timeLeft / 60)).toString().padStart(2,"0")} : ${(timeLeft % 60).toString().padStart(2,"0")}`

        setDisplayTime(formattedTime)
    },[timeLeft])

  return (
    <>
    <h1 className="text-3xl my-5 ">⏳ Time Left : {displayTime}</h1>

    </>
  )
};

export default Timer;
