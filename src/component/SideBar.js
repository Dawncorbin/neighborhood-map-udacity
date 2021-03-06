
import React, {Component} from "react";
import VenueList from "./VenueList";

export default class SideBar extends Component{
  constructor(){
    super();
    this.state = {
      query:"",
      venues:[]

    };
  }
  showSideBar = e => {
    this.setState({ show : true })
  }
  filterVenues = () => {
    if(this.state.query.trim() !== ""){
      const venues = this.props.venues.filter(venue =>venue.name.toLowerCase().includes(this.state.query.toLowerCase()));
    return venues;
    }
    else{
      return this.props.venues;
    }

  }
  Change = e =>{
    this.setState({query:e.target.value});

    const markers = this.props.venues.map(venue => {
      const matched = venue.name.toLowerCase().includes(e.target.value.toLowerCase());
      const marker = this.props.marker.find(marker => marker.id === venue.id);
      if(matched){
        marker.isVisible = true;
      } else {
        marker.isVisible = false;
      }
      return marker;
    });
    this.props.updateSuperState({ markers });
  };
  render(){
    return(
      <section className='sideBar'>
          <input type={"search"} id={"search"} placeholder={"Filter Venues"} onChange={this.Change}/>
          <VenueList {...this.props} venues={this.filterVenues()} listItems={this.props.listItems}/>
      </section>
    )
  }
}
