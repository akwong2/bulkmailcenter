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
                        {/* <div>Phone: (510) 835-8117</div>
                        <div>Fax: (510) 835-1720</div>
                        <div>info@bulkmailcenter.com</div>
                        <div>777 W Grand Ave, Oakland, CA 94612</div> */}
                        <div className="Phone">Phone: (510) 835-8117</div>
                        <div className="Fax">Fax: (510) 835-1720</div>
                        <div className="Address">777 W Grand Ave, Oakland, CA 94612</div>
                        <div className="Email">info@bulkmailcenter.com</div>
                    </div>
                    
                </div>
            </div>
        </Aux>
    )
};

export default sideDrawer;
