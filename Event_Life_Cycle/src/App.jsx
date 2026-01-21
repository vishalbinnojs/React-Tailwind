import { useEffect, useState } from 'react'

import './App.css'
import Alpha from './components/Alpha'
import Form from './components/Form'
import Users from './components/Users'

function App() {

  const [toggle,setToggle] = useState(false)
console.log("toggle",toggle);


  return (
    <>
      <div>
{/* {toggle && <Alpha />} */}
{/* {toggle && <Form />} */}
{toggle && <Users />}
       
        <button onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
       
      </div>
     
    </>
  )
}

export default App
