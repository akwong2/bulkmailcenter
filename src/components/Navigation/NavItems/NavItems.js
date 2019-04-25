import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = (props) => {
    return (
        <ul>
            <li><NavLink to="/" exact>Home</NavLink></li>
            <li><NavLink to="/mail">Mailing Services</NavLink></li>
            <li><NavLink to="/data">Data Processing</NavLink></li>
            <li><NavLink to="/print">Duplication/ Printing</NavLink></li>
            <li><NavLink to="/procurement">Procurement</NavLink></li>
            <li><NavLink to="/testimonial">Testimonial</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/direction">Directions</NavLink></li>
        </ul>
    )
};

export default navItems;
