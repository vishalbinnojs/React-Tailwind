import React from "react";
import { Link } from "react-router-dom";
import {useNavigate} from "react-router-dom"
const ProductCard = ({ product, title }) => {
const navigate = useNavigate();
  return (
    <>
      <div className="bg-zinc-900 text-white rounded p-4  group overflow-hidden"
      onClick={()=>navigate(`/products/${product.id}`)}>
        <img
          className="aspect-square object-contain group-hover:scale-105 group-hover:brightness-110 duration-500 transition-transform ease-in-out
          
           transform-gpu"
          src={product.image}
          alt={product.title}
        />

        <Link
          className="mt-4 line-clamp-2 text-[1.2rem] cursor-pointer hover:text-gray-400 duration-300 transition-gpu "
          title={title}
          to={`/products/${product.id}`}
        >
          {product.title}
        </Link>
        <div className="my-3 text-[0.9rem]">
          <span className="bg-green-500 rounded-4xl py-0.5 px-2 mr-2">
            ⭐{product.rating.rate}
          </span>
          <span>Available: {product.rating.count}</span>
        </div>
        <span className="text-[0.9rem]">
          <em>Rs. {product.price}/-</em>{" "}
        </span>
      </div>
    </>
  );
};

export default ProductCard;
