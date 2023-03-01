import React,{useState} from "react";
import './Navbar.css'
import { NavLink } from "react-router-dom"

export default function Navbar() {
  const [click,setClick]=useState(false);
  const handleClick = () =>setClick(!click);
  console.log(click)
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h4 className="nav-logo"><span style={{color:"white"}}>Sujit</span> Kumar</h4>
        <ul className={click?"nav-menu active":"nav-menu"}>
        <li className="nav-item">
            <NavLink to='/' activeclassname="active" className="nav-link" onClick={handleClick}>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='about' activeclassname="active" className="nav-link" onClick={handleClick}>ABOUT</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='skill' activeclassname="active" className="nav-link" onClick={handleClick}>SKILL</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='contact' activeclassname="active" className="nav-link" onClick={handleClick}>CONTACT</NavLink>
          </li>
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <i className={click? 'fa-solid fa-xmark':'fas fa-bars'}></i>
        </div>
      </div>
        
    </nav>
  
  )
}
