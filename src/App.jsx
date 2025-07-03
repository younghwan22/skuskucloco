import { useState } from 'react'
import Mainall from './pages/Main/Mainall';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainall />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
