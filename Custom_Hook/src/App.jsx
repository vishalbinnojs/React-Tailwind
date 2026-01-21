import { useState } from 'react'
import './App.css'
import withCardLook from './components/HOC/withCardLook'
import Alpha from "./components/Alpha"
import Beta from "./components/Beta"
import { useCounter } from './components/CustomHook/customHook'
import useCustomStyle from './components/CustomHook/customStyle'

function App() {
const {count,increment,decrement,setByValue} = useCounter(0)
const [inputValue,setInputValue] = useState(0)
const AlphaWithCardLookComponent = withCardLook(Alpha);
const BetaWithCardLookComponent = withCardLook(Beta);

const AlphaWithCustomStyle = useCustomStyle(Alpha)
  return (
    <>
    <div style={{display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      gap:'2rem',
    }}>
      
<AlphaWithCardLookComponent user={'vishal'}/>
<BetaWithCardLookComponent user={'kumar'}/>
    </div>
    <div style={{background:'silver',borderRadius:'10px',padding:'2rem',marginTop:"2rem"}}>

    <h1>CUSTOM HOOK</h1>
    <h2 style={{color:'green'}}>{count}</h2>

    <div style={{display:'flex',gap:'2rem',justifyContent:'center'}}>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
   <input type="number" placeholder="Enter number"
   value={inputValue}
   onChange={(e)=>setInputValue(e.target.value)}/>
   <button onClick={()=>setByValue(Number(inputValue))}>Set Value</button>
    </div>

    </div>  
   
   <AlphaWithCustomStyle user="Custom UI "/>
    </>
  )
}

export default App
