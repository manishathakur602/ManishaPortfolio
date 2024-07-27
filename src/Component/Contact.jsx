import React from 'react'



// img import
import Line from "./../assets/Line5.png";

// icon import
import { FaCode } from "react-icons/fa6";

// import { CiInstagram } from "react-icons/ci";
import { SiCodementor } from "react-icons/si";
function Contact() {
  return (
    <>
      <div className="p-3 mt-10 sm:mt-0">
        <div className=" bg-gray-400 rounded-lg p-3">
          <div className="">
            <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
              Contact
            </h1>
            <img src={Line} className="text-[1px]" />
            {/* <img src={Line}  className='text-[1px]'/> */}
            <p className="mt-4 text-center sm:text-left border-b-2 border-solid border-gray-500 rounded-lg p-2">
              Hello there! I'm thrilled to welcome you to my portfolio. I am a
              passionate and versatile full-stack developer with a keen interest
              in exploring the latest cutting-edge technologies. My journey in
              the world of web development has been nothing short of
              exhilarating, and I constantly strive to enhance my skills and
              embrace emerging trends in the industry.
            </p>
          </div>
          <h1 className="mt-5 font-medium text-2xl">What I Do!</h1>

          {/* first section */}
          <div className="md:flex md:gap-3 ">
            <div className="mt-3 bg-red-200 rounded-xl p-4">
              <div className=" flex gap-2 items-center">
                <FaCode className="text-red-700" />
                <h1 className="font-semibold text-[1.2rem]">Web development</h1>
              </div>
              <p className="mt-1">
                As a developer, I find myself most captivated by the power and
                flexibility of NEXT.js. I'm always eager to dive into new
                projects that leverage NEXT.js and discover innovative ways to
                create fast, scalable, and user-friendly applications.
              </p>
            </div>

            {/* second section */}

            <div className="mt-3 bg-red-200 rounded-xl p-4">
              <div className=" flex gap-2 items-center">
              <SiCodementor className="text-[#FF9C1A]" />
                <h1 className="font-semibold text-[1.4rem]">Mentorship</h1>
              </div>
              <p className="mt-1">
              I have also found great joy in sharing my 
knowledge with others. Being a technical 
mentor allows me to give back to the 
community that has supported me 
throughout my career. 
              </p>
            </div>








          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
