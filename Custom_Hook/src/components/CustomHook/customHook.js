import {useState } from "react"
// custom Hook is used to seperate the logic that can be used on multiple locations

// If you want to deal with only data then normal js file is enough
// useCounter is out customHook, you can use it in different components where required
export const useCounter = (initialState) => {
    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count+1)
    }

    const decrement = () => {
        setCount(count-1)
    }

    const setByValue = (val) => {
        setCount(val)
    }
    return {
        count,increment,decrement,setByValue
    }
}