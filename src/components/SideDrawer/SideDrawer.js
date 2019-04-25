import React from 'react';
import Aux from '../Aux';
import './SideDrawer.css';
import NavItems from '../Navigation/NavItems/NavItems';
import BackDrop from '../BackDrop/BackDrop';

const sideDrawer = (props) => {
    let attatchedClasses = ["SideDrawer, Close"]
    if (props.open) {
        attatchedClasses = ["SideDrawer", "Open"]
    }

    return (
        <Aux>
            <BackDrop 
                show={props.open}
                clicked={props.closed} />
            <div className={attatchedClasses.join(' ')}>
                <NavItems />
            </div>
        </Aux>
    )
};

export default sideDrawer;
