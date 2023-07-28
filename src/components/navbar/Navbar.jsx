import React from 'react'
import { RxAllSides } from 'react-icons/rx';
import {FaLinkedin,FaGithub,FaInstagramSquare} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='z-0 py-3 fixed top-0 left-0 w-full flex flex-row justify-around items-center bg-white opacity-90 shadow-md'>
        <div className='flex flex-row justify-center items-center gap-3 my-1'>
            <RxAllSides className='text-4xl font-bold' />
            <Link to="/"><h2 className='text-3xl'>All in One App</h2></Link>      
        </div>
        <div className='flex flex-row justify-center items-center gap-x-9'>
          <Link to="/"><h2 className='text-2xl opacity-80'>Home</h2> </Link>
          <Link to="/worksheet"><h2 className='text-2xl opacity-80'>Worksheet</h2></Link>
            {/* <h2 className='text-2xl opacity-90'>Location</h2> */}
        </div>
        <div className='flex flex-row justify-center items-center gap-x-3'>
          <Link target='_blank' to="https://www.linkedin.com/in/nemanjasimic03/" ><FaLinkedin className='text-3xl hover:text-[33px] transition-all'/></Link>
          <Link target='_blank' to="https://github.com/nemanjasimic03"><FaGithub className='text-3xl hover:text-[33px] transition-all'/></Link>
          <Link target='_blank' to="https://www.instagram.com/nemanja_s3/"><FaInstagramSquare className='text-3xl hover:text-[33px] transition-all'/></Link>
        </div>
    </div>
  )
}

export default Navbar