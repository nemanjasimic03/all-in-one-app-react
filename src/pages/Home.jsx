import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import { apps } from '../apps';
import Navbar from '../components/navbar/Navbar';
import Lottie from "lottie-react"
import animation1 from "../assets/animation_lkmfqwq9.json"
import animation2 from "../assets/animation_lkmfyvx9.json"
import {Link} from "react-router-dom"
import animation3 from "../assets/Mvp9eC6AET (1).json"

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
      <Lottie animationData={animation3} className='absolute lg:top-9  lg:left-[-40px]'/>

          <div className="min-h-[87vh] sm:min-h-screen pt-[90px] w-full flex lg:flex-row justify-center gap-5 lg:justify-around items-center flex-col">

            <div className='max-w-2xl pl-3 flex flex-col gap-7 justify-center items-center'>
              <h1 className='text-4xl lg:text-7xl fancy-font font-bold'>Lorem ipsum dolor sit amet.</h1>
              <h2 className='texl-l lg:text-3xl fancy-font opacity-90'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis atque sunt quibusdam, aspernatur alias voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
              <div className="flex flex-row justify-around items-center gap-10 self-start">
                <Link to="/worksheet"> <button className='text-xl sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Worksheet</button></Link> 
                <button className='text-xl sm:text-2xl py-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-black transition-all'>Download</button>
              </div>
            </div>
           
            <div className='relative bottom-5 flex flex-col justify-center items-center pr-3 w-[300px] lg:w-[520px]'>
              <Lottie animationData={animation1}/>
              <Lottie animationData={animation2} className='absolute bottom-[-35%]'/>
            </div>
          </div>

          <section className='min-h-screen bg-neutral-900 flex flex-col justify-center items-center'>
              <h1 className='fancy-font text-5xl text-white opacity-90'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est, doloremque.</h1>
          </section>
    </div>

    </>
  );
};  

export default Home;
