import React from 'react'
import {RxAllSides} from 'react-icons/rx'
import { Link } from 'react-router-dom';
import {FaLinkedin,FaGithub,FaInstagramSquare} from "react-icons/fa"

const Footer = () => {
  return (
    <div className='flex flex-col gap-3 py-5 bg-stone-950 w-screen justify-center items-center'>
        <div className="flex w-screen flex-col sm:flex-row-reverse sm:pb-2 gap-2 sm:justify-around justify-center items-center ">
            <div className="flex w-screen sm:gap-4 sm:w-auto sm:flex-row text-white justify-around items-center px-2">
                <h2>Still have questions?</h2>
                <button className='text-l sm:text-2xl p-2 px-4 hover:bg-black hover:text-white border-2 font-bold border-orange-600 transition-all'>Contact</button>
            </div>
            <div className='text-white flex flex-row justify-center items-center pl-3 sm:p-0 gap-3 my-1'>
                <RxAllSides className=' text-3xl sm:text-4xl font-bold' />
                <Link to="/"><h2 className=' text-2xl sm:text-3xl'>All in One App</h2></Link>      
            </div>
        </div>
        <hr className='bg-white sm:mb-1' />

        <div className='text-white flex flex-row justify-center items-center gap-x-3'>
          <Link target='_blank' to="https://www.linkedin.com/in/nemanjasimic03/" ><FaLinkedin className='text-[33px] hover:text-[36px] transition-all'/></Link>
          <Link target='_blank' to="https://github.com/nemanjasimic03"><FaGithub className='text-[33px] hover:text-[36px] transition-all'/></Link>
          <Link target='_blank' to="https://www.instagram.com/nemanja_s3/"><FaInstagramSquare className='text-[33px] hover:text-[36px] transition-all'/></Link>
        </div>
        <div className="flex text-white pt-3">
            <h3>©All-in-One-App 2023.  All rights reserved</h3>
        </div>


    </div>
  )
}

export default Footer   