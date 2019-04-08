import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return (
            <div className="Navigation">
                <header>
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
