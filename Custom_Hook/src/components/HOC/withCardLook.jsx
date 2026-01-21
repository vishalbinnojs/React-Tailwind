import React from "react";
// Higher Order Component
const withCardLook = (WrappedComponent) => {
  return (props) => {
    return (
        <div style={{padding:"1rem",borderRadius:"10px",background:"gray"}}>
            <h1>Card Look</h1>
            
           <WrappedComponent {...props}/>
        </div>
    )
  }
};

export default withCardLook;
