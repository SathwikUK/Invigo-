// Works.jsx
import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/w1-removebg-preview.png";
import Fiverr from "../../img/w2-removebg-preview.png";
import Amazon from "../../img/wc-removebg-preview.png";
import Shopify from "../../img/w3-removebg-preview.png";
import Facebook from "../../img/anounce (2).png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";

const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <Navbar />
      <div className="works" id="works">

        {/* Left section */}
        <div className="w-left">
          <div className="awesome">
            {/* Dark mode span */}
            <span style={{ color: darkMode ? "white" : "" }}>
              My Awesome
            </span>
            <span>Services</span>
            <span>
              1. Invigilation Allocation<br />
              2. History of Previous Invigilations<br />
              3. Analysis Reports<br />
              4. Announcements
            </span>
            <div className="blur s-blur1"></div>
          </div>
        </div>

        {/* Right section */}
        <div className="w-right">
          <motion.div
            initial={{ rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{ margin: "-40px" }}
            transition={{ duration: 3.5, type: "spring" }}
            className="w-mainCircle"
          >
            {[Upwork, Fiverr, Amazon, Shopify, Facebook].map((src, idx) => (
              <div key={idx} className="w-secCircle">
                <img src={src} alt="Client Logo" />
              </div>
            ))}
          </motion.div>

          {/* Decorative background circles */}
          <div className="w-backCircle blueCircle"></div>
          <div className="w-backCircle yellowCircle"></div>
        </div>
      </div>
    </>
  );
};

export default Works;