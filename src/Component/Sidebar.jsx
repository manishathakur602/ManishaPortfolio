import React from 'react'
import { Outlet, Link } from "react-router-dom";



// import picture
import Mainpic from './../assets/Images/A1_33_261dffb8-1073-462d-b670-13e2d0b2616a.webp';



// icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareSnapchat } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaMobileScreenButton } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GoDownload } from "react-icons/go";

function Sidebar() {
  return (
    <>
      <div className='p-3 mt-14 sm:flex gap-1'>
        <div className='bg-gray-200 mt-2 rounded-md p-2 flex flex-col items-center'>
              <div className=' h-[7rem] w-[7rem]'>
                   <img className='rounded-xl relative bottom-7 border-2 border-dashed border-yellow-400' src={Mainpic} />
               </div>
              <h1 className='text-[2rem] font-medium'>Manish</h1>
             <p className='text-gray-800 font-light'> Web Developer</p>
                <div className=' mt-3 flex justify-evenly items-center w-[80%] text-[1.5rem]'>
                  <Link to="#" className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer text-blue-800'><FaFacebookSquare /></Link>
                  <Link to="#" className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  text-blue-800'><FaLinkedin /></Link>
                  <Link to="#" className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  text-yellow-300'><FaSquareSnapchat /></Link>
                  <Link to="#" className='bg-sky-300 rounded-lg p-[0.5rem] cursor-pointer  text-pink-500'><FaInstagramSquare /></Link>
                </div>


              <div className='bg-gray-300 rounded-xl mt-10 p-3 '>
                     <div className='flex items-center p-3 gap-3 rounded-md border-b-2 border-solid border-gray-500'>
                          <FaMobileScreenButton />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Phone No</p>
                          <p className='text-[12px] font-semibold'>+91 7807895370</p>
                          </div>
                     </div>

                     <div className='flex items-center  p-3 gap-2 rounded-md border-b-2 border-solid border-gray-500'>
                     <MdOutlineMail />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Email Id</p>
                          <p className='text-[12px] font-semibold'>manishsharma6906@gmail.com</p>
                          </div>
                     </div>

                     <div className='flex items-center  p-3 gap-2  border-b-2 rounded-md border-solid border-gray-500'>
                     <CiLocationOn />
                          <div className=' rounded-xl '>
                          <p className='text-[13px] text-gray-500 font-medium'>Location</p>
                          <p className='text-[12px] font-semibold'>Himachal Pradesh</p>
                          </div>
                     </div>
                     <div className='mt-5 p-2 grid place-items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... rounded-lg'>
                     <Link to="" download="DownloadResume" className='flex items-center gap-1'><GoDownload  /> Download Resume</Link>
                     </div>
                    
               </div>
               
        </div>
     
    </div>
    
    
    </>
  )
}

export default Sidebar
