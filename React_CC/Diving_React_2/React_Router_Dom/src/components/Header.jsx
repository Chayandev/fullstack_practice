import React from "react";
import NavItem from "./NavItem";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-full shadow sticky z-50 top-0 bg-purple-700">
      <nav className="h-16 mx-auto w-[80%] flex justify-between items-center">
        <h1 className="text-slate-50 font-bold">react-router-dom</h1>
        <div className="flex gap-8 justify-center items-center">
          <NavItem label="Home" link="/" />
          <NavItem label="About" link="/about" />
          <NavItem label="Products" link="products" />
          <NavItem label="Contact" link="contact" />
        </div>
        <button
          onClick={() => navigate("/products", { replace: true })}
          className="bg-slate-50 rounded-sm px-4 py-2 text-gray-600 font-semibold hover:bg-white hover:text-purple-950 hover:scale-105 hover:transition transition-transform duration-75"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
}

export default Header;
