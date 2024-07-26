import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Bottom from './Component/Bottom'
import FirstSection from './Component/FirstSection'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Sidebar from './Component/Sidebar'
import Resume from './Component/Resume';




function App() {
  return (
    <>
    {/* <Navbar />
      <div className='sm:flex bg-gray-300 lg:pl-9 lg:pr-9'>
            <Sidebar />
              <div className='flex flex-col'>
                  <div className='flex justify-end'>
         
                  <FirstSection />
                  </div>
              <Home />
              </div>
        </div>
    <Bottom /> */}

    <BrowserRouter>
    <Navbar />
    <Sidebar />

    <Routes>

      
      <Route path='/'  element={<Home />} />
      <Route path='/resume' element={<Resume />} />
    </Routes>
       <Bottom />
       <FirstSection />
    </BrowserRouter>
  
    </>
  )
}

export default App
