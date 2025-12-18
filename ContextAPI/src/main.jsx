import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {MyContextProvider} from "./MyContext.jsx"
import App from './App.jsx'


createRoot(document.getElementById('root')).render(

    <MyContextProvider >
    <App />
    </MyContextProvider>

)
