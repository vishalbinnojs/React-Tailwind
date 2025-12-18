
import { useMyContext } from "../MyContext";
import C from "./C"
import D from "./D"
const A = () => {
const {count}= useMyContext()
  return <div className="bg-green-500 p-5">A
  <p>{count}</p>
  <C />
  <D />
  </div>;
};

export default A;
