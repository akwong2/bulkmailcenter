import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './Direction.css';
import Hover from '../../components/Hover/Hover';

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
		this.setState( prevState => ({
			hover: !prevState.hover
		}))
	}

  render() {
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
					onChildMouseLeave={this.markerHover}
        >
					<Hover 
						lat={37.8129431}
						lng={-122.2754464}
						hover={this.state.hover}
					/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Direction;
