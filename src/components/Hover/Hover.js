import React from 'react'
import dot from '../../assets/red-dot.png';
import './Hover.css';

const hover = (props) => {
  let hoverDot = "Dot "
  if (props.hover) hoverDot += "HoverOn"
  else hoverDot += "HoverOff"
  return (
    <div className={hoverDot}>
      <img src={dot} alt="dot"/>
    </div>
  )
};

export default hover;
