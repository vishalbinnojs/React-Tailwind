import React from "react";

const Button = ({ style, showQuestion, icon, children}) => {
  return (
    <button 
      onClick={showQuestion}
      style={{ background: style }} 
      className={` hover:scale-110 transform-gpu transition-all duration-200 cursor-pointer px-3 py-2 rounded-2xl flex flex-col items-center justify-center gap-1 min-w-[100px]`}
    >
      <span >
        {icon}
      </span>
      {children}
    </button>
  )
}

export default Button;
