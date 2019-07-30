import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavItems.css';

const navItems = (props) => {
  return (
    <div className="NavItems"> 
      <ul>
        <li onClick={props.clicked}><NavLink to="/" exact>Home</NavLink></li>
        <li onClick={props.clicked}><NavLink to="/mail">Mail</NavLink></li>
        {/* <li><NavLink to="/data">Processing</NavLink></li>
        <li><NavLink to="/print">Printing</NavLink></li>
        <li><NavLink to="/procurement">Procurement</NavLink></li> */}
        <li onClick={props.clicked}><NavLink to="/testimonial">Testimonial</NavLink></li>
        <li onClick={props.clicked}><NavLink to="/contact">Contact</NavLink></li>
        <li onClick={props.clicked}><NavLink to="/direction">Directions</NavLink></li>
      </ul>
    </div>
  )
};

export default navItems;
