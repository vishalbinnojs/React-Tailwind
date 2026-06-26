import  { useState, useEffect } from "react";
import axios from "axios"
import {axiosInstance} from "./axiosInstance";

const Axios = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
  });

  // console.log(users);
  console.log(userDetails); 

  
  
// READ
  const fetchData = async () => {
    // const config = {
    //   url: "/users",
    //   baseURL: "https://69285ca7b35b4ffc5015670f.mockapi.io",
    // };
    // const response = await axios(config);

    // Short hand for above code
    // const response = await axios.get("https://69285ca7b35b4ffc5015670f.mockapi.io/users")

    // Using Axios Instance
    const response = await axiosInstance.get("/users",
      {
      // onDownloadProgress:(progress) => {
      //   console.log(progress)
      //   const percent = progress.loaded / progress.total * 100
      //   console.log(percent);
        
      // }
    }
  );
    setUsers(response.data);
  };

  useEffect(() => {
    // axios.interceptors.request.use((request)=>{
    //   request.headers.Authorization = "Bearer token_abc123xyz";
    //   console.log(request.headers);
      
    //   return request;
    // },(err)=>{
    //   console.log("Error:", err); // you can handle error like this
      
    // });  
    axios.interceptors.response.use((response)=>{
      // response.status=400;
      console.log(response)
      return response
    })
    fetchData();
    console.log("useEffect fetcing data");
  }, []);
// CREATE
  const postData = async () => {
    if (userDetails.name === "" || userDetails.age === "") {
      alert("Enter valid name or age");
      return;
    }
    // const res = await axios({
    //   url: "/users",
    //   baseURL: "https://69285ca7b35b4ffc5015670f.mockapi.io",
    //   method: "POST",
    //   data: userDetails,
    // });

    // Short Hand
    // await axios.post("https://69285ca7b35b4ffc5015670f.mockapi.io/users", userDetails,{
    //   headers:{
    //     "Content-Type":"application/json"
    //   }
    // });

    // Using Axios Instance
    await axiosInstance.post("/users",userDetails,{
      headers:{
        "Content-Type":"application/json"
      },
      onUploadProgress: (progress)=>{
        console.log(progress)
        const percent = progress.loaded / progress.total * 100
        console.log(percent);
        
      }
    }),
    // alert("User added successfully");
    setUserDetails({
      name: "",
      age: "",
    });
    fetchData();
  };

  const editData = (currentUser) => {
    console.log(currentUser);
    setUserDetails({ ...currentUser, editMode: true });
  };

// UPDATE
  const updateData = async (id) => {
    // const res = await axios({
    //   url: `/users/${id}`,
    //   baseURL: "https://69285ca7b35b4ffc5015670f.mockapi.io",
    //   method: "PUT",
    //   data: userDetails,
    // });

    // Short Hand
    // await axios.put(`https://69285ca7b35b4ffc5015670f.mockapi.io/users/${id}`, userDetails);

    //Using Axios Instance
    await axiosInstance.put(`/users/${id}`, userDetails),
    alert("User updated successfully")
  
    setUserDetails({
      name: "",
      age: "",
    });
    fetchData();
  };

// DELETE
  const handleDelete = async (id) => {
    if (confirm("⚠ Are you sure to delete this user?")) {
      // const res = await axios({
      //   url: `users/${id}`,
      //   method: "DELETE",
      //   baseURL: "https://69285ca7b35b4ffc5015670f.mockapi.io",
      // });

      // Short Hand
      // await axios.delete(`https://69285ca7b35b4ffc5015670f.mockapi.io/users/${id}`);
      
      // Using Axios Instance
      await axiosInstance.delete(`/users/${id}`)

      alert("User deleted successfully");
      fetchData();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((userDetails) => {
      return {
        ...userDetails,
        [name]: value,
      };
    });
  };

  // ***** NOTE ****: SEE README.md FOR MORE SHORT METHODS OF AXIOS REQUESTS
  // MockApi account is my primary gmail account.

  return (
    <>
      <div className="max-w-2xl mx-auto text-center py-10 text-gray-200">
        <div className="max-w-2xs mx-auto">

        <input className="bg-gray-200 p-2 w-full max-auto text-black outline-none rounded-lg"
          type="text"
          placeholder="Enter Name"
          name="name"
          value={userDetails.name}
          onChange={handleChange}
          />
        <br /><br />
        <input className="bg-gray-200 p-2 w-full text-black outline-none rounded-lg"
          type="number"
          placeholder="Enter Age"
          name="age"
          value={userDetails.age}
          onChange={handleChange}
          />
          </div>
        <br />
        <button
          className={`${userDetails.editMode ? "bg-amber-500" : "bg-blue-500"}`}
          onClick={() =>
            userDetails.editMode ? updateData(userDetails.id) : postData()
          }
        >
          {userDetails.editMode ? "Update Data" : "Post Data"}
        </button>
        <br />
        <br />
        <hr />

        {users.map((user, index) => (
          <div
            className="user bg-gray-500  py-6 mt-4 max-w-2xs rounded-lg mx-auto"
            key={index}
          >
            <p>{user.name}</p>
            <p>{user.age}</p>
            <button className="bg-green-500 mr-2" onClick={() => editData(user)}>
              Edit
            </button>
            <button
              className="bg-red-500"
              onClick={() => handleDelete(user.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Axios;
