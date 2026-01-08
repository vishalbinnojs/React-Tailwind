import React from "react";
import Layout from "../layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { openDeletePopup, openEmployeePopup } from "../../store/features/popup/popupSlice";
import { updateEmployee } from "../../store/features/thunk/employeesThunk";
const Employees = () => {
  
  const employees = useSelector(state => state.employee.employees);
  const loading = useSelector(state => state.employee.loading)

  if(loading) return <Loader />
  console.log(employees);

  return (
    <>
      <Layout>
        <h1 className="text-4xl text-center mb-4 p-2"><span className="skeleton skeleton-text">OnBoard Members</span></h1>
        <ul className="list bg-base-100 rounded-box shadow-md space-y-2">
          {employees.map((emp)=>(

          <EmployeeCard key={emp.id} details={emp}/>
          ))}
        </ul>
      </Layout>
    </>
  );
};

const Loader = () => {
  return(
    <>
    <div className="flex justify-center items-center h-screen">
    <span className="skeleton skeleton-text text-4xl">Loading...</span>
    </div>
    </>
  )
}
export const EmployeeCard = ({details}) => {

  const dispatch = useDispatch();

  const handleEditEmployee = (details) => {
    dispatch(openEmployeePopup(details))
  }
  const handleOpenDeletePopup =  (Eid) => {
    dispatch(openDeletePopup(Eid));
  };
  const handleHighlightEmployee =  (details) =>{
  dispatch(updateEmployee({
  id: details.id,
  details:{
    ...details,
    highlight : !details.highlight
  }
}))
  }

  return (
    <>
      <li className="list-row bg-base-200">
        <div> 
          <img
            className="size-10 rounded-box  skeleton"
            src={details.profileUrl}
          />
        </div>
        <div>
          <div>{details.name}</div>
          <div className="text-xs uppercase font-semibold opacity-60">
            {details.email}
          </div>
        </div>
        <p className="list-col-wrap text-xs">
         {details.bio}
        </p>
        <button 
        onClick={()=>handleEditEmployee(details)}
        className="btn btn-square btn-ghost">
          <CiEdit size={20} />
        </button>
        <button
          onClick={()=>handleOpenDeletePopup(details.id)}
          className="btn btn-square btn-ghost hover:-translate-y-0.5 duration-300 transition-transform transform-gpu"
        >
          <MdOutlineDelete size={20} />
        </button>
        <button 
        onClick={()=>handleHighlightEmployee(details)}
        className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em] "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
            
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path 
              className={`
            transition-all duration-300
            ${details.highlight ? "fill-red-500 stroke-red-500" : "fill-none stroke-current"}
          `}
              d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button>
      </li>
    </>
  );
};

export default Employees;
