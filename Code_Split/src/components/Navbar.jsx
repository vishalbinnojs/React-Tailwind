import { NavLink } from "react-router-dom";
const Navbar = () => (
  <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white ">
    <h1 className="text-2xl font-bold">EduPlatform</h1>
    <ul className="flex gap-6 text-sm font-medium">
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-blue-500")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-blue-500")}
        >
          Stats
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pricing"
          className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-blue-500")}
        >
          Pricing
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "text-blue-500" : "hover:text-blue-500")}
        >
          Contact
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
