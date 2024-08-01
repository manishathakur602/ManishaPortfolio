import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { Link } from 'react-router-dom';
// import Logo from './../assets/Images/Screenshot 2024-07-19 151646.png';




// icon import
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
const Navbar = () => {
  return (
    <>
      <nav className='bg-blue-500 text-white p-4'>
        <div className='flex justify-between items-center p-4 bg-sky-300 rounded-lg'>
        {/* <img src={Logo} /> */}
            <i className='font-medium cursor-pointer text-[1.4rem] sm:text-[2rem]'>PORTFOLIO</i>
            <p className='text-[2rem] cursor-pointer ac'><MdOutlineDarkMode /></p>

   </div>
      </nav>
    </>
  )
}

export default Navbar
