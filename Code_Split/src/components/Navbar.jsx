import React from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const [isMenuOpen,setIsMenuOpen] =React.useState(false)
  console.log(isMenuOpen);
  
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white ">
        <h1 className="text-2xl font-bold">EduPlatform</h1>
        <button 
        className="flex sm:hidden cursor-pointer "
          onClick={()=>setIsMenuOpen(!isMenuOpen)}
        >
          <CiMenuFries 
          className="hover:text-blue-500 transition-colors duration-300 ease-in-out"
          size={20}
          style={{strokeWidth:1}} />
        </button>
        <ul className="hidden gap-6 text-sm font-medium  sm:flex">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stats"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              Pricing
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "hover:text-blue-500"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>

      
        <div className={`fixed top-16 right-0 z-100 h-screen bg-white w-[50%] p-6 rounded-b-sm shadow-2xl ${isMenuOpen ? "translate-x-0":"translate-x-full"} transition-transform duration-300 ease-in-out`}>
          <ul className="flex flex-col gap-6 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stats"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Stats
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Pricing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "hover:text-blue-500"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
    </>
  );
};

export default Navbar;
