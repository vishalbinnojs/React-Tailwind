import { create } from "zustand";
import {createJSONStorage,devtools, persist} from "zustand/middleware"

// persist: it will persist the value in local storage of the state if we reload the page. Syntax: persist(function,object)

const store = (set, get) => ({
    count: 1,
    name: 'vishal',
    increment: () => {
        set((state) => ({
            count: state.count + 1,
        }
        ))
    },
    capitalizeName: () => {
        // console.log(get());
       const {name} = get()
       set({
        name:name.charAt(0).toUpperCase() + name.slice(1)
       })
    }
})

const useMyStore = create(devtools(persist(store,{
    name: "store",
    storage: createJSONStorage(()=>sessionStorage),
   
})))
// By Default the storage is local storage but if you want to store it in session storage you have to use storage key like above
export default useMyStore;