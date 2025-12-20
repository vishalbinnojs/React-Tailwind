import React from "react";
import useMyStore from "./store";

const Name = () => {
    const name = useMyStore(state => state.name) // This state is changing in App component
  return <div>{name}</div>;
};

export default Name;
