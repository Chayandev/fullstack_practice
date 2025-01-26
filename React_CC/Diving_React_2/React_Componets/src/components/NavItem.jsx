import React from "react";

function NavItem({itemName}) {
  return (
    <li className="list-none cursor-pointer hover:text-gray-100 hover:trasform hover:scale-105 transition-transform">{itemName}</li>
  );
}

export default NavItem;