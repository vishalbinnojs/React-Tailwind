import React, { memo } from "react";

const Alpha = () => {
  console.log("Child render");

  return (
    <>
      <div style={{ border: "5px dotted white" }}>
        <h1>Child</h1>
      </div>
    </>
  );
};

export default memo(Alpha);
