import React from 'react'
import { Link } from 'react-router-dom';


// icon import
import { FaHome } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineWorkOutline } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
function FirstSection() {
  return (
    <>
      <div className='p-2 sticky bottom-0 hidden sm:block sm:mt-3'>   
     <div className='mt-10 p-4  rounded-2xl flex justify-between  gap-5'>
        <div className='bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2'>
           <Link to="" ><FaHome /> </Link>
           <p className='text-[12px]'>Home</p>
        </div>

        {/* second icon */}

        <div className='bg-gray-600 text-white rounded-lg grid place-items-center cursor-pointer p-2'>
           <Link to="" ><MdMenuBook /> </Link>
           <p className='text-[12px]'>Resume</p>
        </div>

        {/* 3rd icon */}

        <div className='bg-gray-600 text-white rounded-lg grid cursor-pointer place-items-center p-2'>
           <Link to="" > <MdOutlineWorkOutline /> </Link>
           <p className='text-[12px]'>work</p>
        </div>

        {/* 4th icon */}
        <div className='bg-gray-600 text-white rounded-lg grid cursor-pointer place-items-center p-2'>
           <Link to="" ><BiSolidContact /> </Link>
           <p className='text-[12px]'>Contact</p>
        </div>
     </div> 

   </div>  
    </>
  )
}

export default FirstSection
