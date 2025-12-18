import React, { useEffect, useState } from "react";
import axiosInstance from "./axiosInstance";

import ProductCard from "./ProductCard";
import Loader from "./Loader";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  

  const fetchData = async () => {
    const response = await axiosInstance("/products");
    setProducts(response.data);
  };

  useEffect(() => {
    fetchData();
    console.log("fetching products");
    
  }, []);

  
  return (
    <>
      {products.length === 0 ? (
        <Loader className="text-center bg-zinc-500 h-screen pt-50"/>
      ) : (
        <div className="grid grid-cols-5 bg-zinc-500 gap-4 p-4 max-[1200px]:grid-cols-4 max-[768px]:grid-cols-3 max-[480px]:grid-cols-2 max-[360px]:grid-cols-1"
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} title="See more" />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
