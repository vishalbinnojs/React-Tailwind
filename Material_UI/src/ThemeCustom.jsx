
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeCustom = ({children}) => {
    const [darkMode,setDarkMode] = useState(false)
    const [sideBar,setSideBar] = useState(false)

    const toggleDarkMode = () => {
        setDarkMode(prev => !prev)
    }
    return(
        <ThemeContext.Provider value={{darkMode,toggleDarkMode,sideBar,setSideBar}}>
            {children}
        </ThemeContext.Provider>
    )
}