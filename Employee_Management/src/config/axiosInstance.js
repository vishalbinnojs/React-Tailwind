// https://6958b95d6c3282d9f1d5a20b.mockapi.io/employees
import axios from "axios";

const api = axios.create({
    baseURL:'https://6958b95d6c3282d9f1d5a20b.mockapi.io/',
    // timeout: 5000,
    // headers : {
    //     'Content-Type' : 'application/json',
    // }

})
export default api;
