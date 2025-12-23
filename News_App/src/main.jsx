import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { NewsContextProvider } from './context/NewsContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
<NewsContextProvider>
    <App />
</NewsContextProvider>
)


