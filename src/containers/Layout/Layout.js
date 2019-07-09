import React, { Component } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import { Route } from 'react-router-dom';
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Home from '../../components/Home/home';
import MailingServices from '../../components/MailingServices/MailingServices';
import DataProcessing from '../../components/DataProcessing/DataProcessing';
import DuplicationPrinting from '../../components/Printing/Printing';
import Procurement from '../../components/Procurement/Procurement';
import Direction from '../Direction/Direction';
import Testimonial from '../../components/Testimonial/Testimonial';
import Contact from '../Contact/Contact';
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
            <div className={"Background"}>
                <div>
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
                    <div>
                        <div className="Phone">Phone: 
                            <a href="tel:510-835-8117"> (510) 835-8117</a>
                        </div>
                        <div className="Fax">Fax: (510) 835-1720</div>
                        <div className="Address">
                            <a href="https://www.google.com/maps/dir//37.8129431,-122.2754464/@37.8128413,-122.2799521,16z?hl=en">
                                777 W Grand Ave, Oakland, CA 94612
                            </a>
                        </div>
                        {/* "https://www.google.com/maps/dir//37.8129431,-122.2754464/@37.8128413,-122.2799521,16z?hl=en" */}
                        <div className="Email">
                            <a href="mailto:info@bulkmailcenter.com">info@bulkmailcenter.com</a>
                        </div>    
                    </div>
                </div>
            </div>
        );
    }
}

export default Layout;
