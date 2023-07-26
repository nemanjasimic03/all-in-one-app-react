import React, { useState,useContext, useEffect } from 'react';
import {AppContext} from "../../appContext"
import { apps, updateApps } from '../../apps'
import { FiSettings } from 'react-icons/fi';
import { RxAllSides } from 'react-icons/rx';


const Sidebar = ({setrender,render,handleRend}) => {

  const [newApps, setnewApps] = useState(apps);
  const [isOpen, setisOpen] = useState(false);
  const [sidebarApps,setsideBarApps]=useState(apps)

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
    
      <FiSettings
        className={`text-6xl mb-1 p-1 hover:shadow-2xl hover:text-[60px] transition-all opacity-80 hover:opacity-100 ${
          isOpen ? 'rotate-90' : 'rotate-0'
        } cursor-pointer right-5 bottom-5 fixed z-50`}
        onClick={() => setisOpen(!isOpen)}
      />
      {isOpen && (
        <div className='h-screen w-[310px] bg-white bg-opacity-90 top-0 right-0 fixed'>
          <div className='flex flex-row gap-3 my-7'>
            <RxAllSides className='text-4xl font-bold' />
            <h1 className='text-3xl'>All in One App</h1>
          </div>

          <div className='w-full flex-col justify-start align-start'>
            <h2 className='opacity-75 text-2xl py-5 ml-4'>APPS</h2>
            <div className='flex flex-col gap-7 mt-3'>
              {sidebarApps.map((app) => (
                <div
                  key={app.name}
                  className='flex w-full h-8 flex-row justify-between align-middle opacity-60 cursor-pointer relative hover:opacity-90 hover:scale-105 hover:transition-transform'
                  onClick={() => handleRender(app)}
                >
                  <app.icon className='text-3xl absolute top-[-4px] mr-2 left-9' />
                  <h2 className='text-2xl absolute left-[6.3rem]'>{app.name}</h2>
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
