import { useCallback, useState } from 'react'
import './App.css'
import Alpha from './components/Alpha'

function App() {
  const [count, setCount] = useState(0)
console.log("Parent rendering");
// when i pass this function as props to Alpha, it start rendering again on parent(App.jsx) render even if I'm not make any change in the function and also I wrapped Alpha with react memo, so it should not render
//It renders because the function is created each time in the memory on parent render.
  const handleClick = () => {
  console.log("button is clicked in App");
}
// ham useCallback hook ka use isiliye krte hain taki function ka reference change na ho jab tak usme koi logic ya dependecy change na ho rhi ho(This ensures reference stability)

// conclusion : We use memo and useCallback together(preventing unnecessary child renders) if we pass prop to child and if prop is reference type then useCallback is mendatory
const memoizedHandleClick = useCallback(()=>{
return handleClick()
},[])

  return (
    <>
    <h1>Parent</h1>
   <button onClick={()=>setCount(count+1)}>Count : {count}</button><br /><br />
   
   <Alpha handleClick={memoizedHandleClick}/>
{/* In Alpha memo will compare handleClick function as prevProps === nexProps and their reference is not equal so it is false thus memo did not behave as expected and render the Alpha component */}
    </>
  )
}

export default App
