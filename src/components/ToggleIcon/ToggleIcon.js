import React from 'react';
import './ToggleIcon.css';

const toggleIcon = (props) => (
  <div className="ToggleIcon" onClick={() => props.toggleClick()}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default toggleIcon;
