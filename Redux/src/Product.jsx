import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Product = () => {
// subscription to whole state will trigger the un-necessary re-renders so take only the required state subscription (here: product)
  const product = useSelector(state => state.productReducer.product)

    useEffect(()=>{
        console.log("product re-render");
    })     
    return (
    <>
    <h1>{JSON.stringify(product)}</h1>
    </>
  )
};

export default Product;

