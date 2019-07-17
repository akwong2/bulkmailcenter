import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Hover from '../../components/Hover/Hover';
import './Direction.css';

class Direction extends Component {
	state = {
		hover: false,
		balloon: false,
		api: ''
	}

	static defaultProps = {
		center: {
			lat: 37.8129431,
			lng: -122.2754464
		},
		zoom: 16
	};

	componentWillMount() {
		// console.log("MOUNTED!")
		// fetch('/directionApi')
		// fetch('/api/directionApi')
		const url = `/api/directionApi`
		fetch(url, {
      		headers: { 'Content-Type': 'application/json'}
		})
			.then(res => {
				return res.json();
			})
			.then(data => {
				this.setState({api: data.key})
			})
			.catch(err => {
				console.log(JSON.stringify(err))
			})
	}

	childClick = (props) => {
		window.location.href = "https://www.google.com/maps/dir//37.8129431,-122.2754464/@37.8128413,-122.2799521,16z?hl=en"
	}

	markerHover = (props) => {
		this.setState( prevState => ({
			hover: !prevState.hover
		}))
	}

  render() {
		let apiKey = {key: this.state.api}
		let show = <div></div>
		if (this.state.api !== '') {
			show = 
			<div className="Direction" >
				<GoogleMapReact
					bootstrapURLKeys={apiKey}
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
				<p>
					<a href="https://www.google.com/maps/dir//37.8129431,-122.2754464/@37.8128413,-122.2799521,16z?hl=en">
						777 W Grand Ave, Oakland, CA 94612
					</a>
				</p>
			</div>
		}
		return (
			// Important! Always set the container height explicitly
			<div>
				<h2>Directions</h2>
				{show}
				</div>
		);
  }
}
 
export default Direction;
