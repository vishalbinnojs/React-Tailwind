// if you want to reuse the UI using custom Hook then you have to make jsx file
// for UI reuse custom Hook and Higher Order Component is same
import React from "react";

const useCustomStyle = (Component) => {
 return (props) => {
    return (
        <>
         <div style={{background:'yellow',color:'black',padding:'1rem',marginTop:'2rem'}}>
            <h1>Custom Style</h1>
            
      <Component {...props}/>
    </div>
        </>
    )
 }
};

export default useCustomStyle;
