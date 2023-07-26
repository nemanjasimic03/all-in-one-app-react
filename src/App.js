import React, { useState,useContext } from 'react';
import { AppContext } from './appContext';
import Home from './pages/Home';

function App() {
  
  const { components } = useContext(AppContext);
  return (
    <>
      <Home/>   
    </>
  );
}

export default App;
