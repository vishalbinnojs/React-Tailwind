import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {closeDeletePopup} from "../../store/features/popup/popupSlice";
import { deleteEmployee } from "../../store/features/thunk/employeesThunk";

const DeletePopup = () => {
    const deletePopup = useSelector(state=> state.popup.deletePopup);
    
    const dispatch = useDispatch();

    
    
    const handleDeleteEmployee = async () => {
      await dispatch(deleteEmployee(deletePopup));
      dispatch(closeDeletePopup())
    }
    const handleCloseDeletePopup = () => {
      dispatch(closeDeletePopup())
    }
    if(!deletePopup) return null;
  return (
    <>
    <div 
  
    className="fixed top-0 left-0 z-20 w-full h-full flex justify-center items-center bg-black/80">

    <div className="card bg-base-100 w-96 shadow-sm">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">⚠ Delete</h2>
    <p className="py-2">Are you sure you want to delete ?</p>
    <div className="card-actions">
      <button 
      onClick={handleDeleteEmployee}
      className="btn btn-neutral ">Yes</button>

      <button 
      onClick={handleCloseDeletePopup}
      className="btn btn-neutral "> No</button>
    </div>
  </div>
</div>
    </div>
    </>
  )
};

export default DeletePopup;
