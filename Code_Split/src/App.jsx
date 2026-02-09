
import { lazy,Suspense } from 'react'
import { Routes, Route} from 'react-router-dom'

import './App.css'
import Layout from './Layout'
// import Home from './pages/Home'
// import Stats from './pages/Stats'
// import Pricing from './pages/Pricing'
// import Contact from './pages/Contact'
const Home = lazy(()=>import('./pages/Home'))
const Stats = lazy(()=>import('./pages/Stats'))
const Pricing = lazy(()=>import('./pages/Pricing'))
const Contact = lazy(()=>import('./pages/Contact'))
function App() {


  return (
    <>
   
<Suspense fallback={ <h1 className='text-7xl animate-bounce text-center p-20' >Loading....</h1> }>

      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/stats' element={<Stats className={'min-h-screen flex flex-col justify-center items-center'}/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Route >
      </Routes>
</Suspense>
  
 
    </>
  )
}

export default App;
