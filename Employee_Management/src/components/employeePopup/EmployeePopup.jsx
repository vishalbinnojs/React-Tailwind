import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeEmployeePopup } from "../../store/features/popup/popupSlice";
import {
  createEmployee,
  updateEmployee,
} from "../../store/features/thunk/employeesThunk.js";
const EmployeePopup = () => {
  const [formDetails, setFormDetails] = useState({
    profileUrl: "",
    name: "",
    email: "",
    bio: "",
    highlight: false,
    
  });

  const employeePopup = useSelector((state) => state.popup.employeePopup);


  const dispatch = useDispatch();

  const handleFormDetails = (e) => {
    const { name, value } = e.target;
    setFormDetails((formDetails) => ({
      ...formDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const {profileUrl,bio,name,email} = formDetails;

    if(!profileUrl.trim() || !bio.trim() || !name.trim() || !email.trim()){
      alert("Please fill the empty field**")
      return;
    }
    
    if (employeePopup.id) {
      await dispatch(
        updateEmployee({
          id: employeePopup.id,
          details: formDetails,
        })
      );
    } else {
      await dispatch(createEmployee(formDetails));
    }
 
    dispatch(closeEmployeePopup());
  };

  useEffect(() => {
    if (!employeePopup.id) {
      setFormDetails({
        profileUrl: "",
        name: "",
        email: "",
        bio: "",
        highlight: false,
      
      });
    } else if (employeePopup.id) {
      setFormDetails({
        profileUrl: employeePopup.profileUrl,
        name: employeePopup.name,
        email: employeePopup.email,
        bio: employeePopup.bio,
        highlight: false,
        
      });
    }
  }, [employeePopup]);

  if (!employeePopup) return null;

  return (
    <>
      <div
        onClick={(e) => {
          dispatch(closeEmployeePopup());
        }}
        className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/80 z-20"
      >
        <fieldset
          onClick={(e) => e.stopPropagation()}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
        >
          <legend className="fieldset-legend">Employee Details</legend>

          <label htmlFor="profile" className="label text-white/80">
            Profile Url
          </label>
          <input
            id="profile"
            type="text"
            className="input"
            placeholder="Profile Url"
            name="profileUrl"
            value={formDetails.profileUrl}
            onChange={handleFormDetails}
            
          />

          <label htmlFor="name" className="label text-white/80">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            value={formDetails.name}
            onChange={handleFormDetails}
          />

          <label htmlFor="email" className="label text-white/80">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            value={formDetails.email}
            onChange={handleFormDetails}
          />

          <label htmlFor="bio" className="label text-white/80">
            Bio
          </label>
          <textarea
            id="bio"
            className="textarea h-24"
            placeholder="Bio"
            name="bio"
            value={formDetails.bio}
            onChange={handleFormDetails}
          ></textarea>

          <button
            onClick={handleSubmit}
            className="btn btn-neutral mt-4"
          >
            Submit
          </button>
        </fieldset>
      </div>
    </>
  );
};

export default EmployeePopup;
