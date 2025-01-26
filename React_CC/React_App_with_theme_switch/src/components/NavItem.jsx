import React from "react";
import { NavLink } from "react-router-dom";

function NavItem({ link, label }) {
  return (
    <NavLink
      to={link}
      key={label}
      className={({ isActive }) => `
     ${
       isActive
         ? "text-white font-semibold scale-105"
         : "hover:text-white text-slate-300"
     }
    cursor-pointer text-lg font-medium hover:transition  hover:scale-105 transition-transform duration-100 
   
   `}
    >
      {label}
    </NavLink>
  );
}

export default NavItem;
