
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
// importing actions
import { addToProduct, incrementCount} from './redux/action/productAction';
import Product from './Product';

import { addToCart } from './redux/action/cartAction';

function App() {
  // // Initial state access using useSelector hook (access it where ever you want to use it)
  // const state = useSelector((state) => {
  //   return state;
  // })
  // console.log(state);  
  // dispatch the action using useDispatch()
  const dispatch = useDispatch();

const handleAddToProduct = () => {
  dispatch(addToProduct({
    id:1,
    name:"samsung"
  }))
}

const handleIncrement = () => {
  dispatch(incrementCount())
}

const handleAddToCart = () => {
  dispatch(addToCart())
}
  return (
    <>
   <h1>REDUX</h1>
   <button onClick={handleAddToProduct}> Add Product </button>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={handleAddToCart}>Add To Cart</button>
   <Product />
    </>
  )
}

export default App

