import axios from "axios";

const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com",
    responseType:"json"
})

export default axiosInstance