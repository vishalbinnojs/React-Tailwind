
import {useMyContext} from "../MyContext"
const C = () => {
  const {count} = useMyContext()
  return <div className="bg-violet-700 p-5">C
  <p>{count}</p></div>;
};

export default C;
