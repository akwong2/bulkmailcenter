import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import dot from '../../assets/red-dot.png';
import './Direction.css';

const AnyReactComponent = (hover) => <div className={hover ? "HoverOn" : "HoverOff"}>{<img src={dot} alt="dot"/>}</div>;
const apiKey = "";

class Direction extends Component {
	state = {
		hover: false
	}

	static defaultProps = {
	center: {
		lat: 37.8129431,
		lng: -122.2754464
	},
	zoom: 16
};

  childClick = (props) => {
    console.log("hello")
  }

  markerHover = (props) => {
    console.log(this.props.children)
  }
 
  render() {
		console.log(this.state.hover)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <h2>Directions</h2>
        <p>777 W Grand Avenue</p>
        <GoogleMapReact
          bootstrapURLKeys={{ key: apiKey}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          onChildClick={this.childClick}
          onChildMouseEnter={this.markerHover}
        >
          <AnyReactComponent
            lat={37.8129431}
            lng={-122.2754464}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Direction;