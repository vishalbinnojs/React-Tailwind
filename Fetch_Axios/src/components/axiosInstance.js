import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://69285ca7b35b4ffc5015670f.mockapi.io",
    responseType:"json",

})

export {axiosInstance}