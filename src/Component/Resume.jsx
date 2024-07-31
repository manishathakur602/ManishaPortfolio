import React from 'react'



// icon import
import { PiStudent } from "react-icons/pi";
import { FaLayerGroup } from "react-icons/fa6";





// img import
import Line from "./../assets/Line5.png";

function Resume() {
  return (
    <>
    <div className="p-3 mt-10 sm:mt-0">
           <div className='bg-gray-400 rounded-lg p-3 sm:p-5 '>
                  <div className=" ">
                      <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
                      Resume
                      </h1>
                      <img src={Line} className="text-[1px]" />
                  </div>
{/*  main section of both group */}
           <div className='mt-5  lg:flex lg:items-center lg:gap-10'>
                    {/* first section */}
                    <div className='  p-3 bg-white rounded-2xl shadow-2xl shadow-black'>
                            <div className='flex items-center gap-2'>

                            <PiStudent className="text-red-700 text-[1.2rem]" />
                                  <h1 className='font-semibold'>Education </h1>
                            </div>
                            <div className="mt-3 bg-red-200 rounded-xl p-4">
                                  <div className=" sm:flex sm:gap-7 sm:items-center">
                                  
                                        <div className=' border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Degree</h1>
                                        <p className='text-[13px]'>Rayat Bahra University</p>
                                        </div>
                                        <div className='sm:flex sm:flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Passing</h1>
                                        <p className='text-[13px]'>2020-24</p>
                                        </div>
                                        <div className='sm:sm:flex flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">CGPA</h1>
                                        <p className='text-[13px]'>7.19</p>
                                        </div>
                                  </div>
                                  <p className="mt-1">
                                   
                                  </p>
                                </div>
                             </div>

                             {/* second section */}

                             <div className=''>
                             <div className=' p-3 bg-white rounded-2xl shadow-2xl shadow-black mt-6 lg:mt-0'>
                            <div className='flex items-center gap-2'>

                            <FaLayerGroup className="text-red-700 text-[1.2rem]" />
                                  <h1 className='font-semibold'>Experience </h1>
                            </div>
                            <div className="mt-3 bg-red-200 rounded-xl p-4 ">
                                  <div className=" sm:flex sm:gap-7 sm:items-center">
                                  
                                        <div className=' border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Degree</h1>
                                        <p className='text-[13px]'>Rayat Bahra University</p>
                                        </div>
                                        <div className='sm:flex sm:flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">Passing</h1>
                                        <p className='text-[13px]'>2020-24</p>
                                        </div>
                                        <div className='sm:sm:flex flex-col sm:items-center border-solid border-b-2 border-gray-700 rounded-md p-2'>
                                        <h1 className="font-semibold text-gray-500">CGPA</h1>
                                        <p className='text-[13px]'>7.19</p>
                                        </div>
                                  </div>
                                  <p className="mt-1">
                                   
                                  </p>
                                </div>
                             </div>
                             </div>
                             </div>























            </div>
     </div>
    </>
  )
}

export default Resume
