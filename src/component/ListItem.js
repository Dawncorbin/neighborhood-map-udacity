import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
      return (
        <li tabIndex="0" className="ListItem"
        onClick={() => this.props.handlelistitemclick(this.props)}>
          <img
            src=
              {this.props.categories[0].icon.prefix+"32"+
               this.props.categores[0].icon.suffix}
            alt={this.props.categories[0].name}/>
        {this.props.name}
      </li>
    );
  }
}
