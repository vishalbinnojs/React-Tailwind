
import './App.css'
import Counter from './store/components/Counter'
import {useSelector,useDispatch} from 'react-redux'
import {changeName} from "./store/features/counter/counterSlice.js"
import Users from "./store/components/Users.jsx"
function App() {
 
const name = useSelector(state => state.counter.name);
const dispatch = useDispatch();

  return (
    <>
   <h1>Redux Toolkit</h1>
   <Counter /><br /><br />
 <h2>{name}</h2>
   <input type="text" onChange={(e)=>dispatch(changeName(e.target.value))} /> <br />
   <Users />

    </>
  )
}

export default App
