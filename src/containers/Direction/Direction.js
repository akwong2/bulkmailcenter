import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Hover from '../../components/Hover/Hover';

const apiKey = "";

class Direction extends Component {
	state = {
		hover: false,
		balloon: false
	}

	static defaultProps = {
		center: {
			lat: 37.8129431,
			lng: -122.2754464
		},
		zoom: 16
	};


	childClick = (props) => {
		window.location.href = "https://www.google.com/maps/dir//37.8129431,-122.2754464/@37.8128413,-122.2799521,16z?hl=en"
	}

	markerHover = (props) => {
		this.setState( prevState => ({
			hover: !prevState.hover
		}))
	}

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '95%' }}>
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
						balloon={this.state.balloon}
					/>
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Direction;
