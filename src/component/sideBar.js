import React, {Component} from 'react';
import venueList from './venueList';

export default class sideBar extends Component {
  render() {
      return (
        <div className="sideBar">
          <input type={"search"} id={"search"} placeholder={"Filter Venues"} />
          <venueList {...this.props} handleListItemClick ={this.props.handleListItemClick}/>
        </div>)
  }
}
