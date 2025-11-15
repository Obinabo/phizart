import React, {useState, useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from './Button'
import logo from '../assets/img/phizarts-logo.png'
import logoWhite from '../assets/img/phizarts-white-logo.png'
import heroBg from "../assets/img/futurism-perspective.png";
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { RxHamburgerMenu } from 'react-icons/rx' //Import Nav button icon
import { FaXmark } from 'react-icons/fa6'

//Header Component
export const Header = () => {
const [scrolled, setScrolled] = useState(false)
const [isActive, setIsActive] = useState(false)

const toggleNav = () =>{
  setIsActive(prev => !prev)
}
useEffect(() =>{
  const handleScroll = () => {
    const isScrolled = window.scrollY >= 100;
    if(isScrolled !== scrolled){
      setScrolled(isScrolled)
    }
  }
  document.addEventListener('scroll', handleScroll, {passive: true})
  return() => {
    document.removeEventListener('scroll', handleScroll)
  }
}, [scrolled])
  return (
    <>
      <div className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="left">
          <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link>
        </div>
        <div className="right">
          <NavLink to="/graphics-pack" className="navlink">Graphics Pack</NavLink>
          <NavLink to="/portfolio" className="navlink">Portfolio</NavLink>
          <NavLink to="/expertise" className="navlink">Expertise</NavLink>
          <NavLink to="/about" className="navlink">About Me</NavLink>
          <span className="navlink"><Button text="Contact Me" btnclass="click-button" to="/contact"/></span>
          <span className="navbutton" onClick={toggleNav}><RxHamburgerMenu /></span>
        </div>
      </div>
      <div className={`mobile-nav ${isActive ? 'active' : ''}`}>
        <FaXmark className="cancel" onClick={toggleNav} />
        <div className='section'>
          <Link to="/graphics-pack">Graphics Pack</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/expertise">Expertise</Link>
          <Link to="/about">About Me</Link>
          <Button btnclass="button click-button" to="/contact" text="Contact Me" />
        </div>
      </div>
    </>
  )
}

//Inverted Links Component
export const Inverted = () => {
  return (
    <div className="inverted">
      <Link to="https://facebook.com/phizarts7" className="inverted-text">Facebook</Link>
      <Link to="https://instagram.com/phizarts7" className="inverted-text">Instagram</Link>
      <Link to="https://linkedin.com/" className="inverted-text">LinkedIn</Link>
    </div>
  )
}

//HeroBanner Component
export const HeroBanner = ({children, bgImage}) => {
  return(
    <div className="hero-banner" style={{background: `url(${bgImage || heroBg}) no-repeat center center/cover`}}>
      {children}
    </div>
    
  )
} 

//Section Component
export const Section = ({children, bgImage, bgColor}) =>
  (
    <div className="section" style={{background: bgImage ? `url(${bgImage})` : bgColor || "transparent"}}>
      {children}
    </div>
  )

//Footer Component
export const Footer = () => {
  const iconStyle = {
    fontSize: "1.7em",
    color: "var(--white-color)",
    margin: "5px",
    background: "var(--light-bg)",
    padding: "7px",
    borderRadius: "50%"
  }
  return (
    <div className="footer">
        <div className="top">
          <div className="left">
            <Link to="/"><img src={logoWhite} className="logo" alt="Logo" /></Link>
          </div>
          <div className="right">
            <Link to="https://facebook.com/phizarts7"><FaFacebook style={iconStyle}/></Link> 
            <Link to="https://x.com/"><FaXTwitter style={iconStyle}/></Link>
            <Link to="https://instagram.com/phizarts7"><FaInstagram style={iconStyle}/></Link>
            <Link to="https://linkedin.com/"><FaLinkedin style={iconStyle}/></Link>
          </div>
        </div>
        <div className="center">
          <div className="item1">
            <h2>About us</h2>
            <p style={{textAlign: "justify"}}>At PhizArts Inc., creativity meets purpose. We are a design-driven studio specializing in Graphic Design, UI/UX Design, and Picture Frames craftsmanship, bringing bold ideas to life through visuals that inspire, engage, and endure.</p>
            <p><Link to="/about">Read More...</Link></p>
          </div>
          <div className="item2">
            <h2>Who we are</h2>
            <p><Link to="/about">About</Link></p>
            <p><Link to="/contact">Contact</Link></p>
            
          </div>
          <div className="item2">
            <h2>Our work</h2>
            <p><Link to="/expertise">Expertise</Link></p>
            <p><Link to="/portfolio">My Works</Link></p>
          </div>
          
        </div>
        <div className="bottom">
            <p style={{fontSize: "0.5em", textAlign: "center"}}>Copyright  2025 PhizArts. All Rights Reserved. Powered by Walcode</p>
        </div>

    </div>
  )
}
