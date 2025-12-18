// ContextAPI resolves prop drilling
import {useMyContext} from "./MyContext"
//named import
import './App.css'
import A from "./components/A"
import B from "./components/B"

function App() {
 
const {count} = useMyContext()

  return (
    <>
 
 <div className="bg-amber-900 p-10">
  App
 <p >{count}</p>
  <A/>
  <B />
 </div>
    </>
  )
}

export default App
