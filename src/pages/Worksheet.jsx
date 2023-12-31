import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Tracker from '../components/expense tracker/Tracker';
import Metronome from '../components/metronome/Metronome';
import ToDo from '../components/todo/ToDo';
import Card from '../components/weather/Card';
import { apps } from '../apps';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';


const Worksheet = () => {
  const [components, setComponents] = useState(apps.map((app) => app.jsx));

  useEffect(() => {
    setComponents(apps.map((app) => app.jsx));
    setrender(!render)
  }, [apps]);

  const [render, setrender] = useState(false)
  const [isOpen, setisOpen] = useState(false);
  const handleRend = () =>{
      setrender(!render)
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center pt-[120px] '>
        <div className='App flex flex-row gap-7 sm:gap-[20px] gap-x-9 flex-wrap relative justify-center items-center'>
          {render && components.map((Comp) => (
            <Comp key={Comp.name} onClick={handleRend} />
          ))}

          <Sidebar setisOpen={setisOpen} isOpen={isOpen} setrender={setrender} render={render} handleRend={(handleRend)}/>
          <Navbar setisOpen={setisOpen} isOpen={isOpen}/>
          <Footer/>
        </div>
        
    </div>

    </>
  );
};  

export default Worksheet;
