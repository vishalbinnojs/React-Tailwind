
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Layout from "./components/Layout"
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetail from './components/ProductDetail'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
         {
      path:"/",
      element:<Home />,
    },
    {
      path:"/products",
      element:<Products />,
    },
    {
      path:"/products/:id",
      element:<ProductDetail />,
    },
      ]
    }
   
  ])

  return (
    <>
    <RouterProvider router={router}/>
     
    </>
  )
}

export default App
