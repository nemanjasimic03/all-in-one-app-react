import React, { useState, useContext, useEffect } from 'react';
import Sidebar from '../components/sidebar/Sidebar';
import Tracker from '../components/expense tracker/Tracker';
import Metronome from '../components/metronome/Metronome';
import ToDo from '../components/todo/ToDo';
import Card from '../components/weather/Card';
import { AppContext } from '../appContext';
import { apps } from '../apps';

const Home = () => {
  const [components, setComponents] = useState(apps.map((app) => app.jsx));

  useEffect(() => {
    setComponents(apps.map((app) => app.jsx));
    setrender(!render)
  }, [apps]);

  const [render, setrender] = useState(false)

  const handleRend = () =>{
      setrender(!render)
  }
  return (
    <>
    <div className='flex flex-col justify-center items-center mb-3'>
      <h1 className='text-black text-8xl text-center p-8 fancy-font'>All in One App</h1>
        <div className='App flex flex-row gap-[20px] flex-wrap relative justify-center items-center'>
          {render && components.map((Comp) => (
            <Comp key={Comp.name} onClick={handleRend} />
          ))}

          <Sidebar setrender={setrender} render={render} handleRend={(handleRend)}/>
        </div>
    </div>

    </>
  );
};  

export default Home;
