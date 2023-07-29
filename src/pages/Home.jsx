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
     

          <div className="min-h-[87vh] sm:min-h-screen pt-[110px] sm:pt-[90px] w-full flex lg:flex-row justify-center gap-5 lg:justify-around items-center flex-col">

            <div className='max-w-2xl pl-3 flex flex-col gap-7 justify-center items-center'>
              <h1 className='text-4xl lg:text-7xl fancy-font font-bold pr-3 sm:pr-0'>Lorem ipsum dolor sit amet.</h1>
              <h2 className='texl-l lg:text-3xl fancy-font opacity-90'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque sunt quibusdam, aspernatur alias voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
              <div className="flex flex-row justify-around items-center gap-10 self-start">
                <Link to="/worksheet"> <button className='text-xl sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Worksheet</button></Link> 
                <button className='text-xl sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Download</button>
              </div>
            </div>
           
            <div className='relative bottom-5 flex flex-col justify-center items-center pr-3 w-[280px] lg:w-[520px]'>
              <Lottie animationData={animation1}/>
              <Lottie animationData={animation2} className='absolute bottom-[-35%]'/>
            </div>
          </div>

          <section className='h-[820px] sm:h-[700px] py-5 bg-neutral-900 flex flex-col sm:flex-row justify-center items-center gap-8 relative backdrop-blur-sm'>
          <Lottie animationData={animation3} className='absolute sm:top-[200px] sm:left-[420px] top-[100px] right-12 w-[320px] sm:w-[560px]'/>
            <div className='h-[820px] sm:h-[700px] py-5  flex flex-col sm:flex-row justify-center items-center gap-8 relative backdrop-blur-sm'>
              <div className='flex flex-col justify-center items-center gap-9 sm:w-[930px] '>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5 '>
                      <h1 className='text-lg sm:text-2xl text-white'>Browser Saved Data</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'>Lorem ipsum dolor, sit amet consectetur s laudantium! Et necessitatibus corrupti a vel labore eaque perferendis consectetur ipsum corporis!</h2>
                  </div>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5'>
                      <h1 className='text-lg sm:text-2xl text-white'>Browser Saved Data</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'>Lorem ipsum dolor, sit amet consectetur s laudantium! Et necessitatibus corrupti a vel labore eaque perferendis consectetur ipsum corporis!</h2>
                  </div>
                  <div className='flex flex-col justify-center gap-3 max-w-2xl px-5'>
                      <h1 className='text-lg sm:text-2xl text-white'>Browser Saved Data</h1>
                      <h2 className='text-sm sm:text-lg text-white opacity-70'>Lorem ipsum dolor, sit amet consectetur s laudantium! Et necessitatibus corrupti a vel labore eaque perferendis consectetur ipsum corporis!</h2>
                  </div>

                </div>
                <div>
                  <img src={img1} alt="" className='w-[350px] sm:w-auto' />
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
