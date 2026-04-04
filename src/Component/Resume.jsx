import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// icons
import { PiStudent } from "react-icons/pi";
import { FaLayerGroup } from "react-icons/fa6";
import { FaNetworkWired } from "react-icons/fa";

// img
import Line from "./../assets/Line5.png";

function Resume() {

  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  return (
    <div className="p-3 sm:p-5 mt-10 sm:mt-0 livvic-lighta">
      <div className="bg-gray-400 rounded-lg p-3 sm:p-6 lg:p-10">

        {/* Header */}
        <div>
          <h1 className="font-semibold text-[1.5rem] text-center sm:text-left">
            Resume
          </h1>
          <img src={Line} className="mt-2 w-[120px] sm:w-[150px]" />
        </div>

        {/* MAIN SECTION */}
        <div
          className="mt-5 grid grid-cols-1 xl:grid-cols-3 gap-5"
          data-aos="fade-in"
        >

          {/* EDUCATION */}
          <div className="p-3 bg-white rounded-2xl shadow-md shadow-black">
            <div className="flex items-center gap-2">
              <PiStudent className="text-red-700 text-[1.2rem]" />
              <h1 className="font-semibold">Education</h1>
            </div>

            <div className="mt-3 bg-red-200 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                
                <div className="border-b-2 border-gray-700 p-2">
                  <h1 className="font-semibold text-gray-500">Degree</h1>
                  <p className="text-[13px]">Doaba Group of college</p>
                </div>

                <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                  <h1 className="font-semibold text-gray-500">Passing</h1>
                  <p className="text-[13px]">2021-24</p>
                </div>

                <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                  <h1 className="font-semibold text-gray-500">CGPA</h1>
                  <p className="text-[13px]">8.17</p>
                </div>

              </div>
            </div>
          </div>

          {/* EXPERIENCE */}
          <div className="p-3 bg-white rounded-2xl shadow-md shadow-black">
            <div className="flex items-center gap-2">
              <FaLayerGroup className="text-red-700 text-[1.2rem]" />
              <h1 className="font-semibold">Experience</h1>
            </div>

            <div className="mt-3 space-y-3">

              {/* Item */}
              <div className="bg-red-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                  
                  <div className="border-b-2 border-gray-700 p-2">
                    <h1 className="font-semibold text-gray-500 text-[13px]">
                      1. Company Name
                    </h1>
                    <p className="text-[13px]">Kreativan technologies</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">From</h1>
                    <p className="text-[13px]">15-Jan-24</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">To</h1>
                    <p className="text-[13px]">30-Jan-25</p>
                  </div>

                </div>
              </div>

              <div className="bg-red-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                  
                  <div className="border-b-2 border-gray-700 p-2">
                    <h1 className="font-semibold text-gray-500 text-[13px]">
                      2. Company Name
                    </h1>
                    <p className="text-[13px]">DigiSky Fusion</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">From</h1>
                    <p className="text-[13px]">03-Feb-25</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">To</h1>
                    <p className="text-[13px]">30-June-2025</p>
                  </div>

                </div>
              </div>

              <div className="bg-red-200 rounded-xl p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                  
                  <div className="border-b-2 border-gray-700 p-2">
                    <h1 className="font-semibold text-gray-500 text-[13px]">
                      3. Company Name
                    </h1>
                    <p className="text-[13px]">Metaponder Solution</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">From</h1>
                    <p className="text-[13px]">01-Sept-25</p>
                  </div>

                  <div className="border-b-2 border-gray-700 p-2 text-left sm:text-center">
                    <h1 className="font-semibold text-gray-500">To</h1>
                    <p className="text-[13px]">Present</p>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* SKILLS */}
          <div className="p-3 bg-white rounded-2xl shadow-md shadow-black">
            <div className="flex items-center gap-2">
              <FaNetworkWired className="text-red-700 text-[1.2rem]" />
              <h1 className="font-semibold">Work Skills</h1>
            </div>

            <div className="mt-3 bg-red-200 rounded-xl p-4 sm:p-6 text-[16px] text-gray-600">
              <div className="flex flex-wrap gap-3 font-semibold">
                {[
                  "HTML5","CSS3","TAILWIND CSS","BOOTSTRAP",
                  "JAVASCRIPT","REACT.JS","NEXT.JS (Basic)",
                  "GIT","GITHUB/Gitlab","Postman"
                ].map((skill, i) => (
                  <h1 key={i} className="underline text-sm sm:text-base">
                    {skill}
                  </h1>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Resume;