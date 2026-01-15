import {useContext } from 'react'
import {createTheme, ThemeProvider} from "@mui/material/styles"
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// remove default browser styling
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeContext, ThemeCustom } from './ThemeCustom.jsx'

const Root = () => {
  const {darkMode} = useContext(ThemeContext);

  const theme = createTheme({
   palette : {
    mode : darkMode ? 'dark' : 'light'
   }
  })

  return(
     <ThemeProvider theme={theme}>
<CssBaseline/>
    <App />
</ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <ThemeCustom>
   <Root />
</ThemeCustom>
)
