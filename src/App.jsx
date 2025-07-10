import { useState } from 'react';
import Mainall from './pages/Main/Mainall';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FrontEnd from './pages/Track/FrontEnd';
import BackEnd from './pages/Track/BackEnd';
import Design from './pages/Track/Design';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainall />} />
        <Route path='/frontend' element={<FrontEnd/>} />
        <Route path='/backend' element={<BackEnd />} />
        <Route path='/design' element={<Design/>}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App;
