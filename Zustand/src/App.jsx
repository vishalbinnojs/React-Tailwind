
import { useEffect } from 'react';
import './App.css'
import useMyStore from './store'
import Name from "./Name"

function App() {
  //subscription to individual state : here i have not taken the subscription of name state so when i click on capitalizeName (which change the name state) the re-render not happen. 
  // const name = useMyStore(state => state.name) // because if i want to show name in the app component then i have to take subscription of the name state but if i don't want to use it here and i take the subscription it will re-render the count state which will degrade the performance(ON LARGE SCALE APPLICATIONS).I have change the name state here and show it another component named <Name />
  const count = useMyStore(state => state.count) //subscription to count state
  const increment = useMyStore(state => state.increment)
  const capitalizeName = useMyStore(state=> state.capitalizeName)

// const {count,name,increment,capitalizeName} = useMyStore(); 
// subscription to all states of store not recommended bcz it triggers the re-render of  other state 

// if you think you destructure count like this const {count} = useMyStore() this means subscription to name state as well

// const handleClick = () =>{
//   increment();

// }
// const handleName = ()=>{
//   capitalizeName()
// }
useEffect(()=>{
console.log("re-render hua kya",count);

})
  return (
    <>
    <h1 className="bg-red-500">Zustand</h1>
    {/* <p>{name}</p> */}
    <Name />
    <p>Count:{count}</p>
    <button className="bg-black p-2 text-white mr-2" onClick={increment}>Increment</button>
    <button className="bg-black p-2 text-white" onClick={capitalizeName}>Capitalize</button>
    </>
  )
}

export default App
