import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Header">
                <div className="Main">
                    <div className="Icon">
                        <Logo />
                    </div>
                    <div className="Control">
                        Sign In
                    </div>
                </div>
                <div className="Navigation">
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
                </div>
            </div>
        );
    }
}

export default Navigation;
