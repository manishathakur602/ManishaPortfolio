import React from 'react'


// img import
import Line from "./../assets/Line5.png";
import { Link } from 'react-router-dom';
import firstpicture from './../assets/firstProject.png';
import secondPicture from './../assets/secondpicture.png';
import code from './../assets/code.png';




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
                    <p className=' font-normal text-sm'>Netflix Clone</p>
                    <Link to="https://hotel-booking-app-cyan.vercel.app/" className='text-white' >Visit</Link>
                    </div>
                    </div>
                      

                    <div className='bg-gray-600 p-2 shadow-md shadow-black rounded-md mt-5 lg:mt-0'>
                      <img  src={secondPicture} />
                      <p className='mt-3 font-medium'>Web Development</p>

                    <div className='flex items-center justify-between p-1'>
                    <p className=' font-normal text-sm'>wooden-galaxy</p>
                    <Link to="https://wooden-galaxy-chi.vercel.app/" className='text-white' >Visit</Link>
                    </div>
                    </div>






                    <div className='bg-gray-600 p-2 shadow-md shadow-black rounded-md mt-5 lg:mt-0'>
                      <img  src={code} />
                      <p className='mt-3 font-medium'>Web Development</p>

                    <div className='flex items-center justify-between p-1'>
                    <p className=' font-normal text-sm'>Password Generator</p>
                    <Link to="https://password-generator-zeta-gules-23.vercel.app/" className='text-white' >Visit</Link>
                    </div>
                    </div>



                  </div>


















            </div>
      
      </div>
    </>
  )
}

export default Work
