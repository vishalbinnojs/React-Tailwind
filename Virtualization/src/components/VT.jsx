import React from "react";
import { Virtuoso } from "react-virtuoso";
const VT = ({ list, itemHeight, height }) => {
    console.log("Virtuoso component");
    
  return (
    <Virtuoso
      style={{ height: height }}
      data={list}
      itemContent={(_, item) => (
        <div
          style={{
           
            height: itemHeight,
            borderBottom: "2px solid black",
          }}
        >
          <p className="h-full">{item}</p>
        </div>
      )}
    />
  );
};

export default VT;
