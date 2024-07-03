import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
import './App.css';
import Register from './components/Register/register'
import Login from "./components/Login/Login";
import MainDash from "./components/Dash/maindash";
import { RiRegisteredFill } from "react-icons/ri";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "white" : "",
        }}
      >
        <Router>
          
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Intro />} />
            <Route path="/services" element={<Services />} />
            <Route path="/works" element={<Works />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>}/>
            <Route path="/dashboard"  element={<MainDash/>}/>
          </Routes>
          
        </Router>
      </div>
    </>
  );
}

export default App;
