import React,{useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import Loader from "./Loader"
import axiosInstance from "./axiosInstance";
const ProductDetail = () => {
  const [details,setDetails] = useState({})
  const [fetchedData,setFetchedData] = useState(true)
  console.log(details);
  
  // const params = useParams();
    const {id} = useParams()
    console.log(id);
    
    const fetchDetails = async ()=>{
        const response = await axiosInstance(`/products/${id}`)
       const data = response.data;
       setDetails(data);   
       setFetchedData(false)
    }

    useEffect(()=>{
        fetchDetails();
        console.log('fetching details');
    },[id])

  return (
    <>
    <div className="bg-zinc-500  h-screen flex justify-center items-center text-gray-200"
    >
  {fetchedData ? (<Loader />):(
        <div className="bg-zinc-900 p-30 px-50 min-h-screen w-full ">
          <span className="cursor-pointer text-[0.8rem] mb-4 bg-blue-900 p-0.5 px-3 rounded-e-2xl  shadow-md shadow-amber-200/30 hover:shadow-lg transition-shadow duration-300"><em>{String(details.category).toUpperCase()}</em></span>
            <img className="aspect-square object-contain h-50 mx-auto "src={details.image} alt={details.title}/>
            <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-center text-4xl hover:text-gray-400 duration-300">{details.title}</h2>
               <div className="text-center">
                Ratings: <span className="bg-green-500 rounded-4xl py-0.5 px-2 mr-2">⭐{details?.rating?.rate}</span>
                <span>In Stock: {details?.rating?.count}</span>
               </div>
            <p className="text-left"> <span className="text-white font-bold">Description: </span>{details.description}</p>
            </div>
    </div>
  )}
    </div>
    </>
  )
};

export default ProductDetail;
