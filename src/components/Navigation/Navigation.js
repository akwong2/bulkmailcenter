import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <div className="Logo">
                    <Logo />
                </div>
                <header className="DesktopOnly">
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/mail">Mailing Services</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }
}

export default Navigation;
