import React from 'react';
import Aux from '../Aux';
import './SideDrawer.css';
import NavItems from '../Navigation/NavItems/NavItems';
import BackDrop from '../BackDrop/BackDrop';

const sideDrawer = (props) => {
    let attatchedClasses = 'SideDrawer'
    if (props.open) {
        attatchedClasses = 'SideDrawer Open'
    }
    return (
        <Aux>
            <BackDrop 
                show={props.open}
                clicked={props.closed} />
            <div className={attatchedClasses}>
                <NavItems />
                <div className="SideFooter">
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
        </Aux>
    )
};

export default sideDrawer;
