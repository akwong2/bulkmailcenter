import React from './node_modules/react';
import './BackDrop.css';

const backDrop = (props) => {
  return (
    props.show ? <div className="BackDrop" onClick={props.clicked}></div> : null
  )
};

export default backDrop;
