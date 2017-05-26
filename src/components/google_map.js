import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    let position = {lat: this.props.lat, lng: this.props.lon};
    const map = new google.maps.Map(this.refs.map, {
      zoom:12,
      center: position
    });

    const marker = new google.maps.Marker({
      position: position,
      map: map
    });
  }
  
  render(){
    return <div ref="map" />;
  }
}

export default GoogleMap;