import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import Books from '../../img/int-logo.jpg'
import teacher from '../../img/int-logo1.png'
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import Login from "../Login/Login";
import intro from '../../img/intro.png';
import intro1 from '../../img/intro1.png';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
   <div>
    <Navbar/>
   
    <div className="Intro" id="Intro">
       
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Welcome! To</span>
          <span>Invigilation Management</span>
          <span>
          An invigilation module is a software tool designed to facilitate and streamline the monitoring and oversight of examinations or assessments. 
          </span>
        </div>
        {/* <a href={<Dashboard/>} target="blank"> */}
        <Link to="/login" className="nav-link">
        <button className="button n-button">Get Started</button>
      </Link>
        {/* </a> */}
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <a href="https://www.linkedin.com/school/vasireddy-venkatadri-institute-of-technology-nambur-v-pedakakani-m-pin-522508-cc-bq-/?originalSubdomain=in" target="blank"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/sac_vvit/?hl=en" target="blank"><img src={Instagram} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={intro1} alt="" />
        
        
        

       
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Intro;
