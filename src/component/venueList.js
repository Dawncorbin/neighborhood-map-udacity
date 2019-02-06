import React, {Component} from 'react';

export default class venueList extends Component {
  render() {
      return (
        <ol className="venueList">
          {this.props.venues &&
            this.props.venues.map((venue,idx) => (
            <listItem key={idx} {...venue} handleListItemClick={this.props.handleListItemClick}/>
        ))}
        </ol>
      );
  }
}
