import React, { Component } from 'react';
import Navigation from '../../Components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import SideDrawer from '../../Components/SideDrawer/SideDrawer';
import Home from '../../Components/Home/home.js';
import MailingServices from '../../Components/MailingServices/MailingServices';
import DataProcessing from '../../Components/DataProcessing/DataProcessing';
import DuplicationPrinting from '../../Components/Printing/Printing';
import Procurement from '../../Components/Procurement/Procurement';
import Direction from '../Direction/Direction';
import Testimonial from '../../Components/Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import Footer from '../../Components/Footer/Footer';
import './Layout.css';

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
      <div className="Background">
        <div className="Bar">
          <Navigation 
            toggleClick={this.toggleIconHandler} />
          <SideDrawer 
            open={this.state.showSideDrawer} 
            closed={this.sideDrawerClosedHandler} />
        </div>
        <div className="Layout">
          <Route path="/" exact component={Home} />
          <Route path="/mail" exact component={MailingServices} />
          <Route path="/data" exact component={DataProcessing} />
          <Route path="/print" exact component={DuplicationPrinting} />
          <Route path="/procurement" exact component={Procurement} />
          <Route path="/testimonial" exact component={Testimonial} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/direction" exact component={Direction}/>
        </div>
        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default Layout;
