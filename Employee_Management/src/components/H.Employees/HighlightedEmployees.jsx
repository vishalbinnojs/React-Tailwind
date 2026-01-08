import React from "react";
import { useSelector } from "react-redux";
import Layout from "../layout/Layout";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

const HighlightedEmployees = () => {
  const employees = useSelector((state) => state.employee.employees);
  const highlightedEmployees = employees.filter((emp) =>
    emp.highlight ? emp : null
  );

  return (
    <>
      <Layout>
        {employees.length === 0 ? (
          <h1 className="text-4xl p-2 text-center mb-4"><span className="skeleton skeleton-text">No Star This Month</span></h1>
        ) : (
          <h1 className="text-4xl p-2 text-center mb-4"><span className="skeleton skeleton-text">Stars Of This Month</span></h1>
        )}
        <ul className="list bg-base-100 rounded-box shadow-md space-y-2">
          {highlightedEmployees.map((emp) => (
            <li key={emp.id} className="list-row bg-base-200">
              <div>
                <img className="size-10 rounded-box" src={emp.profileUrl} />
              </div>
              <div>
                <div>{emp.name}</div>
                <div className="text-xs uppercase font-semibold opacity-60">
                  {emp.email}
                </div>
              </div>
              <p className="list-col-wrap text-xs">{emp.bio}</p>
              <button className="btn btn-square btn-ghost">
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
                ${
                  emp.highlight
                    ? "fill-red-500 stroke-red-500"
                    : "fill-none stroke-current"
                }
                `}
                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                    ></path>
                  </g>
                </svg>
              </button>
            </li>
          ))}
        </ul>
        <h5 className="text-end mt-4">
          Click on the top heart icon to see full employees list
        </h5>
      </Layout>
    </>
  );
};

export default HighlightedEmployees;
