import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavItem({ label, link }) {
  return (
    // <Link to={link}>
    //   <h1 className=" cursor-pointer text-lg  text-slate-50 font-medium hover:transition  hover:scale-105 transition-transform duration-100 hover:text-white">
    //     {label}
    //   </h1>
    // </Link>

    <NavLink
      to={link}
      key={label}
      //replace
      className={({ isActive }) => `
      ${isActive ? "text-white font-semibold scale-105" : "hover:text-white text-slate-300"}
    cursor-pointer text-lg font-medium hover:transition  hover:scale-105 transition-transform duration-100 
    `}
    >
      {label}
    </NavLink>
  );
}
export default NavItem;
