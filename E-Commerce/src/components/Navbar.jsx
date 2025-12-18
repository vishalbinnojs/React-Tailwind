import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="bg-zinc-900  flex  items-center gap-16 text-gray-200 px-5 max-[768px]:gap-8 max-[480px]:gap-5">
        <img
          className="w-15"
          src="https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png"
          alt="Brand-logo"
        />
        <div className="text-xl flex gap-7 max-[768px]:gap-5 max-[480px]:gap-3 max-[480px]:text-[1.1rem]">
          <Menu to="/" title="Home" />
          <Menu to="/products" title="Products" />
        </div>
      </nav>
    </>
  );
};

const Menu = ({ to, title }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `${isActive ? "text-[#ec840c]" : ""} hover:text-[orange] hover:scale-[0.95] active:scale-[0.90]  duration-300 transform-gpu`
      }
      to={to}
    >
      {title}
    </NavLink>
  );
};

export default Navbar;
