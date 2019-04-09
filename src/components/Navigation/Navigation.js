import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <ToggleIcon />
                <div className="FirstNav">
                    <ul>
                        <li><NavLink to="/" exact>Home</NavLink></li>
                        <li><NavLink to="/mail">Mailing Services</NavLink></li>
                        <li><NavLink to="/data">Data Processing</NavLink></li>
                        <li><NavLink to="/print">Duplication/Printing</NavLink></li>
                    </ul>
                </div>
                <div className="Logo">
                    <Logo />
                </div>
                <div className="SecondNav">
                    <ul>
                        <li><NavLink to="/procurement">Procurement</NavLink></li>
                        <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                        <li><NavLink to="/contact">Contact Us</NavLink></li>
                        <li><NavLink to="/direction">Directions</NavLink></li>
                    </ul>
                </div>
                {/* <header className="DesktopOnly">
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/mail">Mailing Services</NavLink></li>
                            <li><NavLink to="/data">Data Processing</NavLink></li>
                            <li><NavLink to="/print">Duplication/Printing</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <div className="Logo">
                    <Logo />
                </div>
                <header className="DesktopOnly">
                    <nav>
                        <ul>
                            <li><NavLink to="/procurement">Procurement</NavLink></li>
                            <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                            <li><NavLink to="/contact">Contact Us</NavLink></li>
                            <li><NavLink to="/direction">Directions</NavLink></li>
                        </ul>
                    </nav>
                </header> */}
            </div>
        );
    }
}

export default Navigation;
