import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// icon import
import { FaHome } from "react-icons/fa";
import { MdMenuBook, MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

function FirstSection() {
  // State to track the clicked icon
  const [clicked, setClicked] = useState(null);

  // Toggle the clicked state
  const handleClick = (icon) => {
    setClicked(icon);
  };

  // Define styles based on the clicked state
  const getLinkStyle = (icon) => ({
    backgroundColor: clicked === icon ? "red" : "gray",
  });

  return (
    <>
      <div className="p-2 sticky bottom-0 hidden sm:block sm:mt-3">
        <div className="mt-10 p-4 rounded-2xl flex justify-between gap-5">
          <div className="bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2" onClick={() => handleClick("home")}
              style={getLinkStyle("home")}>
            <NavLink
              to="/home"
              
            >
              <FaHome />
            </NavLink>
            <p className="text-[12px]">Home</p>
          </div>

          <div className="bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2" onClick={() => handleClick("resume")}
              style={getLinkStyle("resume")}>
            <NavLink
              to="/resume"
              
            >
              <MdMenuBook />
            </NavLink>
            <p className="text-[12px]">Resume</p>
          </div>

          <div className="bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2"  onClick={() => handleClick("work")}
              style={getLinkStyle("work")}>
            <NavLink to="/work" >
              <MdOutlineWorkOutline />
            </NavLink>
            <p className="text-[12px]">Work</p>
          </div>

          <div className="bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2" onClick={() => handleClick("contact")}
              style={getLinkStyle("contact")}>
            <NavLink to="/contact"  >
              <BiSolidContact />
            </NavLink>
            <p className="text-[12px]">Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FirstSection;
