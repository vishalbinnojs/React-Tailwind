import "./App.css";
import { useEffect,useState } from "react";  
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';
import Employees from "./components/employees/Employees"
import EmployeePopup from "./components/employeePopup/EmployeePopup";
import DeletePopup from "./components/deletePopup/DeletePopup"; 
import { useDispatch, useSelector } from "react-redux";
import { fetchEmployees } from "./store/features/thunk/employeesThunk.js";
import HighlightedEmployees from "./components/H.Employees/HighlightedEmployees.jsx";
function App() {
  const [showStarList,setShowStarList] = useState(false)
const dispatch = useDispatch();


const handleStarList = (data) => {
setShowStarList(data)

}
useEffect(()=>{
dispatch(fetchEmployees())
},[])

  return (
    <>
      <div className="flex flex-col">
          <EmployeePopup />
          <DeletePopup />
        <Navbar handleStarList={handleStarList}/>
        <div className="flex-1 min-h-screen w-full py-10">
         {showStarList ? <HighlightedEmployees/> : <Employees />}
        </div>
      
        <Footer />
      </div>
    </>
  );
}

export default App;
