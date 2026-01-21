import React, { useState, useEffect } from "react";

const Users = () => {
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []);
console.log(users);

  useEffect(() => {
     
    (async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com//users");
      const data = await response.json();
     
      setUsers(data)
      localStorage.setItem("users", JSON.stringify(data));

    })();
     
    return () => {
        console.log("clear");
        //clear users state and local storage on unmount
        setUsers([])
      localStorage.clear();
    };
  }, []);
  return (
    <>
      {users.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </>
  );
};

export default Users;
