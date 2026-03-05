import React from "react";
import Wrapper from "./Wrapper";
import {useNewsContext} from "../context/NewsContext";
import Headlines from "./Headlines"


const Category = ({className}) => {
  const {setNews,fetchNews,category,setCategory} = useNewsContext();

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
   setCategory(category)
    
    const data = await fetchNews(`/everything?q=${category}`)  
    setNews(data.articles);
  }
  return (
    <>
    <Headlines query={category}/>
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
    </>
  );
};

export default Category;
