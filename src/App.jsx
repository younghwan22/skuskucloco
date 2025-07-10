import { useState } from 'react';
import Mainall from './pages/Main/Mainall';
import Project from "./pages/Project";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'; // Footer 컴포넌트를 가져옵니다.
import Header from './components/Header';
import Footer from './components/Footer';
import Team from './pages/Team';       
import Project from './pages/Project'; 
import FrontEnd from './pages/Track/FrontEnd';
import BackEnd from './pages/Track/BackEnd';
import Design from './pages/Track/Design';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainall />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Team" element={<Team />}/>
      <Header />
      <Routes>
        <Route path="/" element={<Mainall />} />
        <Route path="/team" element={<Team />} />
        <Route path="/project" element={<Project />} /> 
        <Route path='/frontend' element={<FrontEnd/>} />
        <Route path='/backend' element={<BackEnd />} />
        <Route path='/design' element={<Design/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;