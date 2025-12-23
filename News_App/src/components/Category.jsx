import React from "react";
import Wrapper from "./Wrapper";
import {useNewsContext} from "../context/NewsContext";
const Category = ({className}) => {
  const {setNews,fetchNews} = useNewsContext();
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology"
  ];

  const handleNewsByCategory = async (e) =>{
   const category = e.target.value;
    console.log(category);
    
    const data = await fetchNews(`/everything?q=${category}`)  
    setNews(data.articles);
  }
  return (
    <div className={`${className}`}>

    <Wrapper>
      <div className={` flex gap-2 w-fit m-auto  max-w-full  overflow-x-auto scrollbar-none`}>
        
      {categories.map((category,index) => (
        <button 
        key={index}
        value={category}
        onClick={handleNewsByCategory}
        className="btn btn-primary">{category[0].toUpperCase() + category.slice(1)}</button>
      ))}
      </div>
    </Wrapper>
    </div>
  );
};

export default Category;
