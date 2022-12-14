
import './App.css';
// import { BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Navbar from './Component/Navbar/Navbar';
import SignUp from './Component/SignUp';
import Skill from './Component/Skill';
function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" eaxct element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="skill" element={<Skill />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
