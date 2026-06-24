import { useState, useMemo } from 'react'
import './App.css'
import Virtualization from './components/Virtualization';
import VT from "./components/VT"

function App() {
  const [toggle,setToggle] = useState(true)

const array = useMemo(() =>{
  console.log("array");
  
return Array.from({length:100},(_,index)=>index+1)
},[])
console.log("app");

  return (
    <>
 <h1 className="text-center text-2xl bg-zinc-600 text-zinc-100">Virtualization</h1>
 <button 
 className="bg-zinc-700  border-4 border-double border-zinc-500 my-4 text-zinc-100 px-3 py-1 rounded-full cursor-pointer"
 onClick={()=>setToggle(!toggle)}>{toggle ? "Switch to Virtuoso" : "Switch to basics"}</button>
    {toggle ? <Virtualization list={array} height={300} itemHeight={30}/> : <VT list={array} height={300} itemHeight={30}/>}

    </>
  )
}

export default App;
