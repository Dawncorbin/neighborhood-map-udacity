import React, {Component} from 'react';
import ListItem from './ListItem';

export default class VenueList extends Component {
  render() {
      return (
        <ol className="VenueList">
          {this.props.venues &&
            this.props.venues.map((venue,idx) => (
            <ListItem key={idx} {...venue} handlelistitemclick={this.props.handlelistitemclick}/>
          ))}
        </ol>
      )
  }
}
