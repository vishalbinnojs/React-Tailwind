import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ColorBox from "./components/ColorBox";
const App = () => {
  const colors = [
    "pink",
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "brown",
    "lightseagreen",
    "transparent",
  ];

  const [boxColor, setBoxColor] = useState("");
  return (
    <>
      <h1 className=" text-center text-3xl my-10">🌈 Color Switcher</h1>

      <div className="flex justify-center gap-4">
        {colors.map((color, index) => (
          <Button key={index} color={color} setBoxColor={setBoxColor}>
            {color}
          </Button>
          // Here {color} passed to the <Button></Button> component is directly accessed using children property in the button component.
        ))}
      </div>

      <ColorBox boxColor={boxColor} />
    </>
  );
};

export default App;
