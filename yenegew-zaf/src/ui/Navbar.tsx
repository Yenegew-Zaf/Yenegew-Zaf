import React from "react";
import NavLink from "./NavLink";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="h-header container mx-auto flex items-center justify-between ">
      <h1 className="px-4 py-2 text-lg font-semibold uppercase tracking-wider text-green-50">
        Logo
      </h1>
      {/* Desktop Menu */}
      <ul className="flex items-center gap-7 lg:gap-10">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/plant">Plant</NavLink>
        <NavLink href="/contact">Contact</NavLink>
        <Button>Register</Button>
      </ul>

      {/* Mobile Menu */}
    </nav>
  );
};

export default Navbar;
