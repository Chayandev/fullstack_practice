import React from "react";
import NavItem from "./NavItem";

function Header() {
  return (
    <nav className=" bg-indigo-700 flex justify-between items-center p-4">
      <h2 className="text-2xl font-bold text-gray-50">Component</h2>
      <div className="flex gap-6 text-white text-xl">
        <NavItem itemName={"About"} />
        <NavItem itemName={"Services"} />
        <NavItem itemName={"Contact"} />
        <NavItem itemName={"Profile"} />
      </div>
    </nav>
  );
}

export default Header;
