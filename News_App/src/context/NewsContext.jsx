import { createContext, useContext, useState } from "react";
import api from "../config/axios";


const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {

  const [news, setNews] = useState([]);
 const [loading,setLoading] = useState(false);
  const fetchNews = async (url = `/everything?q=india`) => {
    try {
      setLoading(true);
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`
      );
      console.log(response);
      
      setLoading(false)
      return response.data;

    } catch (error) {   
      console.log(error.message);
      setLoading(false)
      return [];
    }
  }
  const data = {
    news,
    setNews,
    fetchNews,
    loading,
    
   
  };
  return (
    <>
      <NewsContext.Provider value={data}>{children}</NewsContext.Provider>
    </>
  );
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
