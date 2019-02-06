import React, {Component} from 'react';
import venueList from './venueList';

export default class sideBar extends Component {
  constructor() {
      super();
      this.state = {
        query:""
      };
  }
    handleFilterVenues = () => {

    }
    handleChange = e => {
      this.setState({ query:e.target.value });
      const markers = this.props.venues.map(venue => {
        const isMatched = venue.name.toLowerCase().includes(e.target.value.toLowerCase());
        const marker = this.props.marker.find(marker => marker.id === venue.id);
        if(isMatched) {
          marker.isVisible = true;
        } else {
          marker.isVisible = false;
        }
      })
    };
  render() {
      return (
        <div className="sideBar">
          <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.handleChange}/>
          <venueList {...this.props} handleListItemClick ={this.props.handleListItemClick}/>
        </div>)
  }
}
