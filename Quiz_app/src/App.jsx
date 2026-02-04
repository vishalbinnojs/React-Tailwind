import {useState} from "react"
import './App.css'
import Timer from './components/Timer'
import Questions from "./components/Questions"
import Result from "./components/Result"    


function App() {
const [showResult,setShowResult] = useState (true)
const [finalScore,setFinalScore] = useState (0)

const receiveScore = (score) =>{
 const finalScore = score;   // score received from Question component
 setFinalScore(finalScore);   // setting the final score in App component state so that it can be passed to Result component
 
 return finalScore;
}

  return (
    <>
  {showResult ? (<div className="bg-transparent rounded-2xl shadow-lg shadow-gray-800 p-5  text-center w-[500px]">

    <Timer setShowResult={setShowResult}/>
    <Questions getScore={receiveScore} setShowResult={setShowResult}/>
      
  </div>) : (<Result >{finalScore}</Result>)
  }
   

    </>
  )
}

export default App
