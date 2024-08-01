import React from 'react'

// icon import
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";



// img import
import Line from "./../assets/Line5.png";


function Contact() {
  return (
    <>
    <div className="p-3 mt-10 sm:mt-0">
        <div className='bg-gray-400 rounded-lg p-5 lg:p-10 lg:flex '>
        <div className=''>
        <div className=" ">
                      <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
                     Work
                      </h1>
                      <img src={Line} className="text-[1px]" />
                  </div>
        


        <div className='mt-6 sm:flex sm:gap-8'>
            <div className='bg-red-200 rounded-lg p-5 '>
                <div className='flex items-center gap-2 just'>
                <IoMdCall className='text-red-700' />
                <p className='font-semibold'>Phone:</p>
                </div>
                    <div className='text-gray-800 mt-2  '>

                          <address>+91 7807895370</address> 
                          <address>+91 7807895370</address>
                    </div>
            </div>


            <div className='bg-red-200 rounded-lg p-5  mt-5 sm:mt-0'>
                <div className='flex items-center gap-2 just'>
                <MdEmail  className='text-red-700' />
                <p className='font-semibold'>Email-Id:</p>
                </div>
                    <div className='text-gray-800 mt-2'>

                          <address>manishsharma6906@gmail.com</address>
                    </div>
            </div>


        </div>
        <p className='mt-5 text-gray-800'>I am always open to discussing <b>new projects, opportunities in tech world,
        partnerships </b>and more so <b>mentorship</b>. </p>



        
        
        
        
        
        
        
        </div>
        <form>
        <div className='mt-3'>
        <p className='font-semibold'>Name:</p>
          <input type='text' required className=' outline-0 border-b-2 border-black bg-gray-400 w-full rounded-md p-2'/>
          <p className='font-semibold mt-3'>Email:</p>
          <input type='email' required className=' outline-0 border-b-2 border-black bg-gray-400 w-full rounded-md p-2' />
          <p className='font-semibold mt-3'>Message:</p>
          <input type='text' required className=' outline-0 border-b-2 border-black bg-gray-400 w-full rounded-md p-2' />
       
          <button className='border-2 border-yellow-300 rounded-full p-2 mt-5 font-bold'>Submit</button>

         
        </div>
        </form>
</div>


    </div>
      
    </>
  )
}

export default Contact
