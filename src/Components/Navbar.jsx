import React from 'react'
import { FaInstagram, FaFacebook, FaWhatsapp ,FaGithub,FaTwitter ,FaInfoCircle, FaProjectDiagram, FaPhoneAlt  } from 'react-icons/fa';
import { IoIosHome } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { FaAward } from "react-icons/fa6";
import { PiReadCvLogoFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <div className="item">
      <div className="top">
        <img src="/myPic.jpg" alt="" />
        <h3>VIVEK TOPALE</h3>
        <ul>
        <li><a href="#"><FaInstagram /> </a></li>
        <li><a href="#"><FaFacebook /></a></li>
        <li><a href="https://wa.me/qr/MLIAOZYLDPZHF1" target="_blank"><FaWhatsapp/> </a></li>
        <li><a href="https://github.com/vivektopale"><FaGithub /></a></li>
        <li><a href="#"><FaTwitter /></a></li>
        </ul>
         <div className="line">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
        </div>
      </div>
      <div className="bottom">
        <ul>
        <li><NavLink to="/"> <FaInfoCircle />  <span>About-Me</span></NavLink></li>
        <li><NavLink to="/projects"> <FaProjectDiagram />  <span>Projects</span></NavLink></li>
        <li><NavLink to="/skills"> <GiSkills />  <span>Skills</span></NavLink></li>
        <li><NavLink to="/achievments"> <FaAward />  <span>Achivements</span></NavLink></li>
         <li><NavLink to="/resume"> <PiReadCvLogoFill />  <span>Resume</span></NavLink></li>
        <li><NavLink to="/contact"> <FaPhoneAlt />  <span>Contact</span></NavLink></li></ul>
      </div>
    </div>
    </>
  )
}

export default Navbar