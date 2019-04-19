import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import Aux from '../../components/Aux';
import './Layout.css';

function Index() {
    return <h2>Home</h2>
}

function Mail() {
    return <h2>Mail</h2>
}

class Layout extends Component {
    state = {
        // if mobile view
        showSideDrawer: false
    }

    toggleIconHandler = () => {
       console.log("hello")
       alert("hello")
    }
    
    render() {
        return (
            <Aux>
                <Navigation 
                    toggleClick={this.toggleIconHandler} />
                <div className="Layout">
                    <Route path="/" exact component={Index} />
                    <Route path="/mail" exact component={Mail} />
                </div>
            </Aux>
        );
    }
}

export default Layout;
