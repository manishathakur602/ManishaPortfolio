import React from 'react'



// icon import
import { PiStudent } from "react-icons/pi";





// img import
import Line from "./../assets/Line5.png";

function Resume() {
  return (
    <>
    <div className="p-3 mt-10 sm:mt-0">
           <div className='bg-gray-400 rounded-lg p-3 '>
                  <div className="">
                      <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
                      Resume
                      </h1>
                      <img src={Line} className="text-[1px]" />
                  </div>
{/*  main section of both group */}
           <div className='mt-5'>
                    {/* first section */}
                    <div className='border-2 border-dashed border-red-600 p-3'>
                            <div className='flex items-center gap-2'>

                            <PiStudent className="text-red-700 text-[1.2rem]" />
                                  <h1 className=''>Education </h1>
                            </div>
                            <div className="mt-3 bg-red-200 rounded-xl p-4 text">
                                  <div className=" flex gap-2 items-center">
                                  
                                    <h1 className="font-semibold text-gray-500"> 10th - &nbsp; 2018</h1>
                                  </div>
                                  <p className="mt-1">
                                   
                                  </p>
                                </div>
                             </div>
                             </div>























            </div>
     </div>
    </>
  )
}

export default Resume
