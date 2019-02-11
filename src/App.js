import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareAPI from './API/';
import SideBar from './component/SideBar';

class App extends Component {
    constructor() {
        super();
        this.state = {
          venues: [],
          markers: [],
          center: [],
          zoom: 12,
          updateSuperState: obj => {
            this.setState(obj);
          }
        };
    }

  closeAllMarkers = () => {
      const markers = this.state.markers.map(marker => {
        marker.isOpen = false;
        return marker;
      });
      this.setState({ markers: Object.assign(this.state.markers, markers) });
    };
//When marker is clicked, open info window
  handleMarkerClick = (marker) => {
      this.closeAllMarkers();
      //console.log(marker);
      marker.isOpen = true;
      this.setState({markers: Object.assign(this.state.markers,marker)})

      const venue = this.state.venues.find(venue => venue.id === marker.id);
      SquareAPI.getVenueDetails(marker.id).then(res => {
          const newVenue = Object.assign(venue,res.response.venue);
          this.setState({ venues: Object.assign(this.state.venues, newVenue) });

        });
  };

  handleMarkerClick = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.handleMarkerClick(marker);
  };

  componentDidMount(){
      SquareAPI.search({
          near:'Seattle, WA',
          query: 'pizza',
          limit: 9
      }).then(results => {
        console.log(results);
          const { venues } = results.response.venues;
          const { center } = results.response.geocode.feature.geometry;
          const markers = results.response.venues.map(venue => {
              return {
               lat: venue.location.lat,
               lng: venue.location.lng,
               isOpen: false,
               isVisible: true,
               id: venue.id
              };
          });
          this.setState({ venues, center, markers });
      });
  }

  render() {
    return (
      <div className="App">
          <SideBar {...this.state} hhandleListItemClick={this.hhandleListItemClick}/>
        <Map aria-label="Map"{...this.state}
        handleMarkerClickarkerclick={this.handleMarkerClickarkerclick}/>
      </div>
    );
  }
}

export default App;
