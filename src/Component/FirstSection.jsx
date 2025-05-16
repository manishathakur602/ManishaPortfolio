import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// icon import
import { FaHome } from "react-icons/fa";
import { MdMenuBook, MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

function FirstSection() {
  const location = useLocation();

  const getLinkStyle = (path) => ({
    backgroundColor: location.pathname === path ? "red" : "gray",
  });

  return (
    <div className="p-2 sticky bottom-0 hidden sm:block sm:mt-3 livvic-light">
      <div className="mt-10 p-4 rounded-2xl flex justify-between gap-5">
        <NavLink
          to="/"
          className="text-white rounded-lg grid place-items-center cursor-pointer p-2"
          style={getLinkStyle("/")}
        >
          <FaHome />
          <p className="text-[12px]">Home</p>
        </NavLink>

        <NavLink
          to="/resume"
          className="text-white rounded-lg grid place-items-center cursor-pointer p-2"
          style={getLinkStyle("/resume")}
        >
          <MdMenuBook />
          <p className="text-[12px]">Resume</p>
        </NavLink>

        <NavLink
          to="/work"
          className="text-white rounded-lg grid place-items-center cursor-pointer p-2"
          style={getLinkStyle("/work")}
        >
          <MdOutlineWorkOutline />
          <p className="text-[12px]">Work</p>
        </NavLink>

        <NavLink
          to="/contact"
          className="text-white rounded-lg grid place-items-center cursor-pointer p-2"
          style={getLinkStyle("/contact")}
        >
          <BiSolidContact />
          <p className="text-[12px]">Contact</p>
        </NavLink>
      </div>
    </div>
  );
}

export default FirstSection;
