import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { apps } from '../apps';
import Navbar from '../components/navbar/Navbar';
import Lottie from "lottie-react"
import animation1 from "../assets/animation_lkmfqwq9.json"
import animation2 from "../assets/animation_lkmfyvx9.json"
import {Link} from "react-router-dom"
import animation3 from "../assets/Mvp9eC6AET (1).json"
import img1 from "../assets/img1.png"
import {FaChrome,FaAppStore} from "react-icons/fa"
import {MdOutlineDashboardCustomize} from "react-icons/md"


const Home = () => {

  const [isOpen, setisOpen] = useState(false);
  const [render, setrender] = useState(false)

  const handleRend = () =>{
      setrender(!render)
  }
  return (
    <>

    <div className='px-2 flex flex-col justify-center items-center mb-3 bg-white relative'>
      <Sidebar isOpen={isOpen} setisOpen={setisOpen} setrender={setrender} render={render} handleRend={(handleRend)}/>
      <Navbar isOpen={isOpen} setisOpen={setisOpen} />
     

          <div className="min-h-[87vh] sm:min-h-screen pt-[100px] sm:pt-[90px] w-full flex lg:flex-row justify-center gap-5 lg:justify-around items-center flex-col">

            <div className='z-30 max-w-[60rem] pl-3 sm:pl-5 flex flex-col gap-3 sm:gap-7 justify-center'>
              <h1 className='text-3xl md:text-7xl fancy-font font-bold pr-3 sm:pr-0'>All-in-One App </h1>
              <h1 className='text-2xl md:text-4xl fancy-font font-bold pr-3 sm:pr-0'> Ultimate Organizer for Seamless Productivity! </h1>
              <h2 className='texl-l lg:text-3xl fancy-font opacity-90'>Tired of switching through numerous apps? Look no further! Introducing All-in-One App, your one-stop solution for streamlining your digital life and maximizing efficiency.</h2>
              <div className="flex flex-row justify-around items-center gap-10 self-start">
                <Link to="/worksheet"> <button className='text-l sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Worksheet</button></Link> 
                <button className='text-l sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Download</button>
              </div>
            </div>
           
            <div className='relative bottom-9 sm:bottom-5 flex flex-col justify-center items-center pr-3 w-[260px] lg:w-[600px]'>
              <Lottie animationData={animation1}/>
              <Lottie animationData={animation2} className='absolute bottom-[-35%]'/>
            </div>
          </div>

          <section className='h-[820px] sm:h-[700px] py-5 bg-neutral-900 flex flex-col sm:flex-row justify-center items-center gap-8 relative backdrop-blur-sm'>
          <Lottie animationData={animation3} className='absolute sm:top-[200px] sm:left-[420px] top-[140px] right-12 w-[320px] sm:w-[560px]'/>
            <div className='h-[820px] sm:h-[700px] py-5  flex flex-col sm:flex-row justify-center items-center gap-8 relative backdrop-blur-[3px]'>
              <div className='flex flex-col justify-center items-center gap-9 sm:w-[930px] '>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5 '>
                      <h1 className='text-lg sm:text-2xl text-white'>Browser Saved Data</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'>Your entered information is automatically saved on your browser, ensuring you never lose progress and can pick up where you left off hassle-free.</h2>
                  </div>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5'>
                      <h1 className='text-lg sm:text-2xl text-white'>App Assembly</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'>Customize your dashboard with frequently used apps, enhancing your workflow. Our user-friendly interface ensures smooth navigation, freeing up more time to focus on what truly matters.</h2>
                  </div>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5'>
                      <h1 className='text-lg sm:text-2xl text-white'>Download the app</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'> All-in-One App is now live on the App Store! Download now and revolutionize the way you work and stay organized!</h2>
                  </div>

                </div>
                <div>
                  <img src={img1} alt="" className='w-[280px] sm:w-auto' />
                </div>
            </div>
          </section>
          <section className='h-screen bg-white'>

          </section>
    </div>

    </>
  );
};  

export default Home;
