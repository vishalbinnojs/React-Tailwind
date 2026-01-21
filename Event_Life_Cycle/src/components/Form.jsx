import React, { useEffect, useState } from "react";

const Form = () => {
  const [name, setName] = useState(localStorage.getItem("name") || "");
  console.log(name);
  useEffect(() => {
   
    console.log("mounting....");
    
    return () => {
      console.log("unmounts");
      localStorage.clear();
    };
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
        />
      </div>
    </>
  );
};

export default Form;
