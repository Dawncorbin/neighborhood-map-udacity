import React, {Component} from 'react';
import VenueList from './VenueList';

export default class SideBar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        query:"",
        venues: []
      };
  }
  showSideBar = e => {
      this.setState({ show : true })
  }

  handleFilterVenues = () => {
    //If search field is not blank, check query against venue list
    if (this.state.query.trim() !== "") {
      const venues = this.props.venues.filter(venue => venue.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase()));
      return venues;
    } else {
      //If search field is blank, show all venues - default state
      return this.props.venues;
    }
  };

  handleChange = e => {
    this.setState({ query:e.target.value });

    const markers = this.props.venues.map(venue => {
      const isMatched = venue.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
      const marker = this.props.marker.find(marker => marker.id === venue.id);
      if(isMatched) {
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({ markers });
  };

  render() {
      return (
        <div className="sideBar">
          <input
              input type={"search"}
              id={"search"}
              placeholder={"Search Here"}
              onChange={this.handleChange}/>

          <VenueList {...this.props}
              venues={this.handleFilterVenues()}
              handleListItemClick ={this.props.handleListItemClick}/>
        </div>
      )
  }
}
