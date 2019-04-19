import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';
import ToggleIcon from '../ToggleIcon/ToggleIcon';

class Navigation extends Component {

    render() {
        console.log("hello Navigation")
        console.log(this.props)
        let nav = <ul>
                    <li><NavLink to="/" exact>Home</NavLink></li>
                    <li><NavLink to="/mail">Mailing Services</NavLink></li>
                    <li><NavLink to="/data">Data Processing</NavLink></li>
                    <li><NavLink to="/print">Duplication/ Printing</NavLink></li>
                    <li><NavLink to="/procurement">Procurement</NavLink></li>
                    <li><NavLink to="/testimonial">Testimonial</NavLink></li>
                    <li><NavLink to="/contact">Contact Us</NavLink></li>
                    <li><NavLink to="/direction">Directions</NavLink></li>
                </ul>

        return (
            <div className="Header">
                <div className="Main">
                    <div className="MobileOnly">
                        <ToggleIcon 
                            toggleClick={this.props.toggleClick} />
                    </div>
                    <div className="Icon">
                        <Logo />
                    </div>
                    <div className="Control">
                        Sign In
                    </div>
                </div>
                <div className="Navigation">
                    {nav}
                </div>
            </div>
        );
    }
}

export default Navigation;
