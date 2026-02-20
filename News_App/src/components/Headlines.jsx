import React from "react";
import { useNewsContext } from "../context/NewsContext";


const Headlines = () => {
const [topNews,setTopNews] = React.useState([]);

    const {headlines,setHeadlines,fetchNews} = useNewsContext()
    
    React.useEffect(()=>{
(async ()=>{
    const data = await fetchNews(`/everything?q=headlines`)
    const top10 = data.articles.slice(0,15)
    setTopNews(top10)
    console.log(top10);
    
})()
    },[])
  return (
    <>
    <div 
    onClick={()=>setHeadlines(false)}
    className={`fixed top-0 z-100 w-full h-screen bg-base-200/50 flex justify-end items-center transition-all duration-300 ease-in-out ${headlines ? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'}`}>
<div className=" h-screen bg-base-100 overflow-y-auto  w-100 scrollbar-none">

    <h2 className="text-xl font-bold italic bg-black/90 px-2 py-4 sticky top-0 z-10">Top News :</h2>
    <ul 
    onClick={(e)=>e.stopPropagation()}
    className="  mt-8 px-8 flex flex-col gap-4">
      {topNews.map((news,i)=>(
          
      <li
      className="rounded-xl bg-black/20 p-4 px-6"
      key={i}>
       <img 
       className="aspect-square w-full mx-auto h-32"
       src={news?.urlToImage} alt="" />
       <p className=" mt-6">

        <a className="text-center cursor-pointer text-blue-500 hover:brightness-75 " target="_blank" href={news?.url}>{news?.title}</a>
        
       </p>
        </li>
      ))}

    </ul>
       </div>
</div>

    </>
  )
};

export default Headlines;

