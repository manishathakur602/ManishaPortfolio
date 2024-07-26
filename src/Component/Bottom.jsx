import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';


// icon import
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

function Bottom() {
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
    <div className='p-2 sticky bottom-0'>   
     <div className='mt-10 p-4  rounded-2xl flex justify-between sm:hidden gap-5'>
        <div className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("home")}
              style={getLinkStyle("home")}>
           <Link to="/home" ><FaHome /> </Link>
           <p className='text-[12px]'>Home</p>
        </div>

        {/* second icon */}

        <div className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("resume")}
              style={getLinkStyle("resume")}>
           <Link to="/resume" ><MdMenuBook /> </Link>
           <p className='text-[12px]'>Resume</p>
        </div>

        {/* 3rd icon */}

        <div className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("work")}
              style={getLinkStyle("work")}>
           <Link to="work" > <MdOutlineWorkOutline /> </Link>
           <p className='text-[12px]'>work</p>
        </div>

        {/* 4th icon */}
        <div className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("contact")}
              style={getLinkStyle("contact")}>
           <Link to="/contact" ><BiSolidContact /> </Link>
           <p className='text-[12px]'>Contact</p>
        </div>
     </div> 

   </div>  
    </>
  )
}

export default Bottom
