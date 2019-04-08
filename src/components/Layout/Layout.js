import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import { Route } from 'react-router-dom';
import Aux from '../Aux';
import './Layout.css';

function Index() {
    return <h2>Home</h2>
}

function Mail() {
    return <h2>Mail</h2>
}

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                <div className="Layout">
                    <Route path="/" exact component={Index} />
                    <Route path="/mail" exact component={Mail} />
                </div>
            </Aux>
        );
    }
}

export default Layout;
