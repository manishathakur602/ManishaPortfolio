import React from 'react'


// img import
import Line from "./../assets/Line5.png";
import { Link } from 'react-router-dom';
import firstpicture from './../assets/firstProject.png';
import secondPicture from './../assets/secondpicture.png';
import code from './../assets/code.png';



// icon import
import { FaGithub } from "react-icons/fa6";


function Work() {
  return (
    <>
      <div className='p-3 mt-10 sm:mt-0'>
            <div className='bg-gray-400 rounded-lg p-5  sm:p-10'>
                <div>
                    <h1 className='font-semibold text-[1.5rem] text-center sm:text-left'>Portfolio</h1>
                    <img src={Line} />
                  </div>
                  <div className=' mt-4 font-semibold'>
                    <Link to="#" className='text-gray-800 '>All Project</Link>
                  </div>

                  <div className='mt-4 lg:flex lg:gap-5'>

                    <div className='bg-gray-600 p-2 shadow-md shadow-black rounded-md '>
                      <img  src={firstpicture} />
                      <p className='mt-3 font-medium'>Web Development</p>

                    <div className='flex items-center justify-between p-1'>
                    <p className=' font-normal text-sm'>hotel-booking</p>

                        <div className='flex items-center gap-5'>
                        <Link to="https://github.com/Manish6906/hotel-booking"  target='_blank' className='text-white' >Visit</Link>
                        <Link to="https://hotel-booking-nine-black.vercel.app/" target='_blank' className='text-white text-[1.2rem]' ><FaGithub /></Link>

                        </div>
                    </div>
                    </div>
                      

                    <div className='bg-gray-600 p-2 shadow-md shadow-black rounded-md mt-5 lg:mt-0'>
                      <img  src={secondPicture} />
                      <p className='mt-3 font-medium'>Web Development</p>

                    <div className='flex items-center justify-between p-1'>
                    <p className=' font-normal text-sm'>wooden-galaxy</p>
                        <div className='flex items-center gap-5'>
                        <Link to="https://wooden-galaxy-chi.vercel.app/"  target='_blank' className='text-white' >Visit</Link>
                        <Link to="https://github.com/Manish6906/wooden-galaxy" target='_blank' className='text-white text-[1.2rem]' ><FaGithub /></Link>

                        </div>
                    </div>
                    </div>






                    <div className='bg-gray-600 p-2 shadow-md shadow-black rounded-md mt-5 lg:mt-0'>
                      <img  src={code} />
                      <p className='mt-3 font-medium'>Web Development</p>

                    <div className='flex items-center justify-between p-1'>
                    <p className=' font-normal text-sm'>Password Generator</p>
                          <div  className='flex items-center gap-5'>
                          <Link to="https://password-generator-zeta-gules-23.vercel.app/"  target='_blank' className='text-white' >Visit</Link>
                          <Link to="https://github.com/Manish6906/PasswordGenerator" target='_blank' className='text-white text-[1.2rem]' ><FaGithub /></Link>

                          </div>
                    </div>
                    </div>



                  </div>


















            </div>
      
      </div>
    </>
  )
}

export default Work
