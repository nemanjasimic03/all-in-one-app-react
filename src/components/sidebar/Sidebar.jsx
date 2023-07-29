import React, { useState,useContext, useEffect } from 'react';
import {AppContext} from "../../appContext"
import { apps, updateApps } from '../../apps'
import { FiSettings } from 'react-icons/fi';
import { RxAllSides } from 'react-icons/rx';
import {FaHome} from 'react-icons/fa'
import {BsPersonWorkspace} from 'react-icons/bs'
import { Link } from 'react-router-dom';



const Sidebar = ({isOpen,setisOpen,setrender,render,handleRend}) => {

  const [newApps, setnewApps] = useState(apps);
  // const [isOpen, setisOpen] = useState(false);
  const [sidebarApps,setsideBarApps]=useState(apps)
  const active = " opacity-100 text-black"
  // newApps.some((app) => app === clickedApp)
  const handleRender = (clickedApp) => {
    let filteredApps;
    if (apps.includes(clickedApp)) {
      // const updatedApps = newApps.map((app) =>
      //   app === clickedApp ? { ...app, jsx: null } : app
      // );
      filteredApps = apps.filter((app) => app !== clickedApp);
      updateApps(filteredApps);
      setrender(!render);
      console.log(clickedApp)
    } else {
      updateApps([...apps,clickedApp])
      setrender(!render);
    }
  };
  return (
    <>
      <div className=' w-[70px] h-[70px] hidden sm:fixed bottom-0 right-0 bg-white rounded-lg opacity-90 hover:opacity-100 shadow shadow-black'></div>
      <FiSettings
        className={`hidden sm:block spin hover:animate-none text-[71px] p-2 hover:text-[69px] transition-all opacity-100  ${
          isOpen ? 'rotate-90' : 'rotate-0'
        } cursor-pointer right-[-2px] bottom-0 rounded-md fixed z-50`}
        onClick={() => setisOpen(!isOpen)}
      />
      {isOpen && (
        <div className={`pt-[70px] z-[40] h-screen w-[270px] sm:w-[310px] bg-white bg-opacity-[95%] top-0 right-[-100%] fixed ${isOpen ? "fade-right-open " : ""}`}>
          <div className='hidden md:flex flex-row justify-center items-center gap-3 my-7'>
            <RxAllSides className='text-4xl font-bold' />
            <h1 className='text-3xl'>All in One App</h1>
          </div>

          <div className='w-full h-screen flex flex-col justify-start align-start'>
            <h2 className='opacity-75 text-2xl py-5 ml-4'>PAGES</h2>
            <div className='flex flex-col gap-7 mt-3 justify-center '>
              <Link to="/">
                <div className='flex flex-row pl-8 gap-[30px] hover:scale-105 transition-all'>
                    <FaHome className='text-2xl sm:text-3xl mr-2'/>
                  <h2 className='text-xl sm:text-2xl opacity-100  left-[5.8rem] sm:left-[6.3rem]'>Home</h2>
                </div>
              </Link>
              <Link to="/worksheet">
                <div className='flex flex-row pl-8 gap-[30px] hover:scale-105 transition-all'>
                  <BsPersonWorkspace className='text-2xl sm:text-3xl mr-2'/>
                  <h2 className='text-xl sm:text-2xl opacity-100  left-[5.8rem] sm:left-[6.3rem]'>Worksheet</h2>
                </div>
              </Link>
             
            </div>
           
            <h2 className='opacity-75 text-2xl py-5 pt-9 ml-4'>APPS</h2>
            <div className='flex flex-col gap-7 mt-3 justify-center items-center'>
              {sidebarApps.map((app) => (
                <div
                  key={app.name}
                  className={`${apps.includes(app) ? "opacity-90 scale-105 " : "opacity-40 "} flex w-full h-8 flex-row justify-between items-center cursor-pointer relative hover:opacity-90 hover:scale-100 transition-all`}
                  onClick={() => handleRender(app)}
                >
                  
                  <app.icon className='text-2xl sm:text-3xl absolute mr-2 left-9' />
                  <h2 className='text-xl sm:text-2xl opacity-100 absolute left-[5.8rem] sm:left-[6.3rem]'>{app.name}</h2>
                </div>
              ))}
            </div>
    
          </div>
          
        </div>
      )}
    </>
  );
};
export default Sidebar;
