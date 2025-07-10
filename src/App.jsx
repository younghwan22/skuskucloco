import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mainall from './pages/Main/Mainall';
import Project from "./pages/Project";
import Team from "./pages/Team";
import FrontEnd from './pages/Track/FrontEnd';
import BackEnd from './pages/Track/BackEnd';
import Design from './pages/Track/Design';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header /> {/* 모든 페이지에 공통으로 보여질 헤더 */}
      <Routes>
        <Route path="/" element={<Mainall />} />
        <Route path="/project" element={<Project />} />
        <Route path="/team" element={<Team />} />
        <Route path="/frontend" element={<FrontEnd />} />
        <Route path="/backend" element={<BackEnd />} />
        <Route path="/design" element={<Design />} />
      </Routes>
      <Footer /> {/* 모든 페이지에 공통으로 보여질 푸터 */}
    </BrowserRouter>
  );
}

export default App;
