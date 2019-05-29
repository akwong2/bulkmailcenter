import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import Aux from '../../components/Aux';
import './Layout.css';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Home from '../../components/Home/home';

function Mail() {
    return <h2>Mail</h2>
}

class Layout extends Component {
    state = {
        // if mobile view
        showSideDrawer: false
    }

    toggleIconHandler = () => {
       this.setState( (prevState) => {
           return { showSideDrawer: !prevState.showSideDrawer}
       })
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false})
    }
    
    render() {
        return (
            <Aux>
                <Navigation 
                    toggleClick={this.toggleIconHandler} />
                <SideDrawer 
                    open={this.state.showSideDrawer} 
                    closed={this.sideDrawerClosedHandler} />
                <div className="Layout">
                    <Route path="/" exact component={Home} />
                    <Route path="/mail" exact component={Mail} />
                </div>
            </Aux>
        );
    }
}

export default Layout;
