
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Layout from "./Layout"
import UseRef from './components/Hooks/UseRef'

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="useRef" element={<UseRef />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
