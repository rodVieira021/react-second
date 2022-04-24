import React from "react";
import logo from './logo.png'



function Navigation() {
  return (
    
      <nav className="nav flex s-b a-i-c">
        <img src= {logo} alt= 'logo'/>
        <ul className="ul-nav flex ">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </nav>
    
  )
};


export default Navigation