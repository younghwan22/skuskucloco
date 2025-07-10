import { useState } from 'react'
import Mainall from './pages/Main/Mainall';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Mainall />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;