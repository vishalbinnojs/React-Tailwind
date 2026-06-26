import { useEffect } from "react";
import axios from "axios";

function BasicAxios() {
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        url: "/posts?_limit=10",
        baseURL: "https://jsonplaceholder.typicode.com",
        //   headers:{
        // Accept:'Axioslication/json',
        // Authoriy:"Bearer token"
        //   },
        //   timeout:'500',
        // data:{              // ❌can't send data in get request
        //   name:"vishal",
        //   age:29
        // }

        // params: {
        //   name: "vishal",
        //   age: 29,
        // },
      };
      const res = await axios(config);
      console.log(res);
    };
    fetchData();
    console.log("render");
  }, []);

  return (
    <>
     
    </>
  );
}

export default BasicAxios;
