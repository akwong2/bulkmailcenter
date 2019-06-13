import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import Aux from '../../components/Aux';
import './Layout.css';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Home from '../../components/Home/home';
import MailingServices from '../../components/MailingServices/MailingServices';
import DataProcessing from '../../components/DataProcessing/DataProcessing';
import DuplicationPrinting from '../../components/Printing/Printing';
import Procurement from '../../components/Procurement/Procurement';
import Direction from '../Direction/Direction';

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
                    <Route path="/mail" exact component={MailingServices} />
                    <Route path="/data" exact component={DataProcessing} />
                    <Route path="/print" exact component={DuplicationPrinting} />
                    <Route path="/procurement" exact component={Procurement} />
                    <Route path="/direction" exact component={Direction}/>
                </div>
            </Aux>
        );
    }
}

export default Layout;
