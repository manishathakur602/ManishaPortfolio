// img imports
import Line from "./../assets/Line5.png";
import { Link } from 'react-router-dom';

// icon imports
import { FaGithub } from "react-icons/fa6";
import freelancer from '../assets/Screenshot 2025-05-16 102912.png';
import tanish from '../assets/Images/imag1.jpg';
import digisky from '../assets/Images/imag2.jpg';
import astrologer from '../assets/Images/image3.jpg';
import shaadi from '../assets/Images/Screenshot 2025-06-03 095609.png';
import metaponder from '../assets/Images/metaponder.png';
import nodegree from '../assets/Images/nodegree.png';





// Array of project data
const projects = [
   {
    image: digisky,
    title: 'Web Development',
    name: 'DigiSky Fusion',
    visitLink: 'https://digiskyfusion.com/',
    githubLink: 'https://github.com/manishathakur602/DigiskyfusionWebsite'
  },
   
  {
    image: astrologer,
    title: 'Web Development',
    name: 'Astrologer',
    visitLink: 'https://astroaghoribaba.com/',
    githubLink: 'https://github.com/manishathakur602/astrologer'
  },
  {
    image: metaponder,
    title: 'Web Development',
    name: 'Metaponder Solution',
    visitLink: 'http://metaponder.com/',
    githubLink: 'https://github.com/manishathakur602/metapondernew'
  },
  {
    image: nodegree,
    title: 'Web Development',
    name: 'Nodegree',
    visitLink: 'https://nodegree.in/',
    // githubLink: 'https://github.com/gsmental/nodegree_next'
  },
 
  {
    image: tanish,
    title: 'Web Development',
    name: 'Tanish Enterpris',
    visitLink: 'https://tanishenterpriss.com/',
    githubLink: 'https://github.com/manishathakur602/Construction'
  },
  {
    image: freelancer,
    title: 'Web Development',
    name: 'Digisky.ai',
    visitLink: 'https://digisky.ai/',
    githubLink: 'https://github.com/manishathakur602/Project-Frontend'
  },
  {
    image: shaadi,
    title: 'Web Development',
    name: 'Shaadi Sanskar',
    visitLink: 'https://www.shaadisanskar.com/',
    githubLink: 'https://github.com/Digiskyfusion/Shaadi'
  },
 
];

function Work() {
  return (
    <div className='px-4  sm:px-6 lg:px-3 lg:py-3 livvic-lighta'>
      <div className='bg-gray-400 rounded-lg p-5 sm:p-10'>
        {/* Section Title */}
        <div>
          <h1 className='font-bold text-2xl sm:text-3xl text-center sm:text-left text-gray-900'>
            Portfolio
          </h1>
          <img className="mt-2 mx-auto sm:mx-0 w-32" src={Line} alt="line divider" />
        </div>

        {/* All Projects link */}
        <div className='mt-4 font-semibold'>
          <Link to="#" className='text-gray-800 underline'>All Projects</Link>
        </div>

        {/* Project Grid */}
        <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-gray-600 rounded-lg shadow-md hover:shadow-xl p-1 transform hover:scale-105 transition duration-300 ease-in-out overflow-hidden'
              data-aos="fade-in"
            >
              <img
                src={project.image}
                alt={project.name}
                className='w-full h-48 object-fill rounded-md'
              />
              <div className='p-4'>
                <p className='text-white font-medium text-lg'>{project.title}</p>
                <div className='flex items-center justify-between mt-2'>
                  <p className='text-gray-200 text-sm'>{project.name}</p>
                  <div className='flex items-center gap-4'>
                    <a
                      href={project.visitLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='text-white hover:underline text-sm'
                    >
                      Visit
                    </a>
                    <a
                      href={project.githubLink}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='text-white text-lg'
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;