# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


#### React Memo

- HOC (component -> HOC -> enhanced Component)
- React.memo shallow comparison karta hai isliye reference stability bahut important hai(useState,useMemo,useCallback)

## Rendering in App Component
 # primitive datatypes
    Number
    Boolean
    String
    null 
    undefined
    BigInt
- inki value compare hoti hai    
- If you are passing props to Alpha component and it changes on setCount then Alpha will render even if you have wrapped the Aplha Component in the React memo because it has the dependency of [count variable](changing in the App on setCount). But since you have prevent the Alpha using React memo so changing in the input will not trigger the re-render in Alpha as input is only present in App component

## Non-primitive dataTypes(reference type)

    objects
    arrays
    functions 
    
    - inka address compare hota hai not the value.
    - So if you pass an object its reference will be compared and reference has a change every time on component re-render. Since reference has a change(0x111 === 0x112) so react will understand it as a prop change and on prop change component will be re-render even if the prop has no change in non-primitive dataTypes



# Recap

- parent jab jab render karta hai,child bhi render karta hai bhale hi child kitna bhi expensive ho react ko fark nhi padta

- ye wala nature ham react memo ki help se fix kar sakte hain

- react memo ek HOC hai jo apne andar ek component leta hai and ek enhance component return karta hai
 - by default ye primitive value ke sath proper kam karta hai and unnecessary re-render ko raokta hai par reference type ke sath he expected tarike se kam nhi karta hai(yahan pe ye shallow comparison karta hai), kyunki jab jab parent re-render hota hai nya reference ban jata hai 
 
- reference stability ke liye ham log useState,useMemo and useCallback ka use Kar sakte hain

- conclusion: react memo sahi proper karta hai lekin, ye jyada effective useMemo, useCallback ke sath hota hai




