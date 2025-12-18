
import {useMyContext} from "../MyContext"
const F = () => {
  const {count,setCount} = useMyContext()
  return <div className="bg-yellow-700 p-5">F <br />
  <button onClick={()=>setCount(count+1)}>Count:{count}</button>
  </div>;
};

export default F;
