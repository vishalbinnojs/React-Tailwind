import { useState } from 'react'
import Alpha from './components/Alpha'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState('')

  //for reference stability use useState because obj in state is on the same memory so the reference for this obj is same. Since the reference is same then Alpha will not re-render untill you not change the obj using setObj
  const [obj,setObj] = useState({
    name:'VISHAL'
  })
  
// Instead of passing object directly, use useState for reference stability
  // const obj= {
  //   name:"vishal"
  // }
  return (
    <>
   <Alpha data={obj}/>
   <input type="text" placeholder = "Enter Name" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    
<button onClick={()=>setObj({name:'kumar'})}>Change Obj value</button>
   
    </>
  )
}

export default App
