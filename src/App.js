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
          <SideBar {...this.state} handleListItemClick={this.handleListItemClick}/>
        <Map aria-label="Map"{...this.state}
        handleMarkerClick={this.handleMarkerClick}/>
      </div>
    );
  }
}

export default App;


import React, { Component } from 'react';
import './App.css';
import Map from "./component/Map";
import SideBar from "./component/SideBar";
import SquareAPI from "./API/index";

class App extends Component {
  constructor(){
    super();
    this.state = {
      venues:[],
      center:[],
      zoom: 12,
      updateSuperState: obj =>{
        this.setState(obj);
      }
    };
  }
  closeMarkers = () =>{
    const markers = this.state.marker.map(marker =>{
      marker.isOpen = false;
      return marker;

    });
    this.setState({markers: Object.assign(this.state.markers, markers)})
  }
  markerClick = (marker) => {
    this.closeMarkers();
    marker.isOpen = true;
    this.setState({markers: Object.assign(this.state.markers, marker)})
    const venue = this.state.venues.find(venue => venue.id === marker.id);
    SquareAPI.getDetails(marker.id).then(res =>{
      const newVenue = Object.assign(venue, res.response.venue);
      this.setState({venues: Object.assign(this.state.venues, newVenue)})
      console.log(newVenue);
    });
  }
  listItems = venue => {
    const marker = this.state.markers.find(marker => marker.id === venue.id);
    this.markerClick(marker);
  }
  componentDidMount(){
    SquareAPI.search({near:"Seattle,WA", query:"pizza", limit:9}).then(result =>{
      const { venues } = result.response;
      const { center } = result.response.geocode.feature.geometry;
      const markers = venues.map(venue => {
        return {
          lat:venue.location.lat,
          lng:venue.location.lng,
          isOpen:false,
          isVisible:true,
          id:venue.id
        };
      });
      this.setState({ venues, center, markers });
      console.log(result);
    });
  }
  render() {
    return (
      <div className="App">
      <Menu width={"300"}>
        <SideBar {...this.state} listItems={this.listItems} />
      </Menu>
        <Map aria-label="Map"{...this.state} MarkerClick = {this.markerClick}/>
    );
  }
}
export default App;
