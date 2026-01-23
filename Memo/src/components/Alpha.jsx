import React from "react";

const Alpha =({data}) => {
React.useEffect(()=>{
  console.log(data);
  
    console.log("Alpha render");
    
})


return (
    <>
    <h1>Alpha </h1>
    </>
  )
};

const EnhancedAlpha = React.memo(Alpha, (prevProp,nextProp)=>{
 
  console.log("reference to be compared",prevProp,nextProp);
  // for non-primitive address is different so return value is false thus triggers re-render(if you pass object directly as prop)
  return prevProp.data === nextProp.data
}
)
// Because this is default export so it can be import by any name in the App.jsx(Alpha here)
export default EnhancedAlpha;
