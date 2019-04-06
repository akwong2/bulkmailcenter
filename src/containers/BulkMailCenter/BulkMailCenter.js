import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import './BulkMailCenter.css';

function Index() {
    return <h2>Home</h2>
}

function Mail() {
    return <h2>Mail</h2>
}

class BulkMailCenter extends Component {
    render() {
        return(
            <div className="BulkMailCenter">
                <h1>BulkMailCenter</h1>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact>Home</NavLink></li>
                            <li><NavLink to="/mail">Mailing Services</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" exact component={Index} />
                <Route path="/mail" exact component={Mail} />
            </div>
        );
    }
}

export default BulkMailCenter;
