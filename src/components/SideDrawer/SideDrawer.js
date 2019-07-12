import React from './node_modules/react';
import Aux from '../Aux';
import NavItems from '../Navigation/NavItems/NavItems';
import BackDrop from '../BackDrop/BackDrop';
import Footer from '../Footer/Footer.js';
import './SideDrawer.css';

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
          <Footer />
        </div>
      </div>
    </Aux>
  )
};

export default sideDrawer;
