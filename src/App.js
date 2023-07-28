import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Worksheet from './pages/Worksheet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worksheet" element={<Worksheet />} />
      </Routes>
    </Router>
  );
}

export default App;
