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
       
           <Link to="/" className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("home")}
              style={getLinkStyle("home")} ><FaHome /> 
               <p className='text-[12px]'>Home</p>
               </Link>
               
      

        {/* second icon */}

        
           <Link to="/resume" className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("resume")}
              style={getLinkStyle("resume")} ><MdMenuBook />
              <p className='text-[12px]'>Resume</p>
               </Link>
           
       

        {/* 3rd icon */}

       
           <Link to="work" className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("work")}
              style={getLinkStyle("work")}> <MdOutlineWorkOutline /> 
               <p className='text-[12px]'>work</p>
              </Link>
           
       

        {/* 4th icon */}
        
           <Link to="/contact" className='bg-gray-600 text-white rounded-lg grid place-items-center p-2' onClick={() => handleClick("contact")}
              style={getLinkStyle("contact")} ><BiSolidContact /> 
               <p className='text-[12px]'>Contact</p>
              </Link>
           
        
     </div> 

   </div>  
    </>
  )
}

export default Bottom
