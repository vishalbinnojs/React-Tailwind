import React, { useState } from "react";

const Virtualization = ({ list, height, itemHeight }) => {
  const noOfVisibleItems = Math.floor(height / itemHeight);
  const [indices, setIndices] = useState([0, noOfVisibleItems]);

  const visibleList = list.slice(...indices);
  const handleScroll = (e) => {
    const { scrollTop } = e.target;

    const newIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = Math.floor(newIndex + noOfVisibleItems);
    // console.log(newIndex);
    // console.log(endIndex);
    setIndices([newIndex, endIndex]);
    console.log("virtualization basics");
  };
  return (
    <>
      <h2 className="text-center text-2xl bg-zinc-700 text-zinc-200">
        Basics of Virtualization
      </h2>
      <div
        style={{
          height: height,
          backgroundColor: "lightblue",
          overflowY: "auto",
        }}
        onScroll={handleScroll}
      >
        <div style={{ height: list.length * itemHeight }}>
          <div
            style={{ transform: `translateY(${indices[0] * itemHeight}px)` }}
          >
            {visibleList.map((item, i) => (
              <p
                style={{
                  color: "green",
                  height: itemHeight,
                  
                }}
                key={i}
              >
                item: {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Virtualization;
