import Mainall from './pages/Main/Mainall';
import Project from "./pages/Project";
import Team from "./pages/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer'; // Footer 컴포넌트를 가져옵니다.

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Mainall />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Team" element={<Team />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;


