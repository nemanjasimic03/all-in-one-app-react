import React,{useState} from 'react'
import { RxAllSides } from 'react-icons/rx';
import {FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';

const Navbar = ({isOpen,setisOpen}) => {

  return (
    <div className='z-40 py-3 fixed top-0 left-0 w-full flex flex-row sm:justify-around items-center bg-white opacity-90 shadow-md'>
        <div className='flex flex-row justify-center items-center pl-3 sm:p-0 gap-3 my-1'>
            <RxAllSides className=' text-3xl sm:text-4xl font-bold' />
            <Link to="/"><h2 className=' text-2xl sm:text-3xl'>All in One App</h2></Link>      
        </div>
        <div className='hidden md:flex flex-row justify-center items-center gap-x-9'>
          <Link to="/"><h2 className='text-2xl opacity-80'>Home</h2> </Link>
          <Link to="/worksheet"><h2 className='text-2xl opacity-80'>Worksheet</h2></Link>
            {/* <h2 className='text-2xl opacity-90'>Location</h2> */}
        </div>
        <div className='hidden md:flex flex-row justify-center items-center gap-x-3'>
          <Link target='_blank' to="https://www.linkedin.com/in/nemanjasimic03/" ><FaLinkedin className='text-3xl hover:text-[33px] transition-all'/></Link>
          <Link target='_blank' to="https://github.com/nemanjasimic03"><FaGithub className='text-3xl hover:text-[33px] transition-all'/></Link>
          <Link target='_blank' to="https://www.instagram.com/nemanja_s3/"><FaInstagramSquare className='text-3xl hover:text-[33px] transition-all'/></Link>
        </div>
        <FiSettings
        className={`fixed right-1 ml-3 md:hidden spin hover:animate-none text-[58px] p-2 transition-all opacity-90  ${
          isOpen ? 'rotate-90' : 'rotate-0'
        } cursor-pointer rounded-md z-50`}
        onClick={() => setisOpen(!isOpen)}
      />
    </div>
  )
}

export default Navbar