import React, { Component } from './node_modules/react';
import Logo from '../Logo/Logo';
import './Navigation.css';
import ToggleIcon from '../ToggleIcon/ToggleIcon';
import NavItems from './NavItems/NavItems';

class Navigation extends Component {

  render() {
    return (
      <div className="Header">
        <div className="Main">
          <div className="MobileOnly">
            <ToggleIcon 
              toggleClick={this.props.toggleClick} />
          </div>
          <div className="Icon">
            <Logo />
          </div>
        </div>
        <div className="Navigation">
          <NavItems />
        </div>
        <div className="Control">
        </div>
      </div>
    );
  }
}

export default Navigation;
