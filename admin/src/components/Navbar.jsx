import React from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <img src={assets.logo} className="h-12" />
      <button>Logout</button>
    </div>
  );
};

export default Navbar;
