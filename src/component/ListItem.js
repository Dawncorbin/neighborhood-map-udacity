import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
      return (
        <div tabIndex="0" className="ListItem" onClick={() => this.props.handleListItemClick(this.props)}>

          <img
            src=
              {this.props.categories[0].icon.prefix+"32"+
               this.props.categores[0].icon.suffix}
            alt={this.props.categories[0].name}/>
        {this.props.name}
      </div>
    );
  }
}
import React, {Component} from 'react';

export default class ListItem extends Component {
  render() {
    return (
      <li tabIndex="0" className="listItem"
        onClick={() =>this.props.handleListItemClick(this.props)}
        >
        <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix}
          alt={this.props.categories[0].name} />
        <p>{this.props.name}</p>
      </li>
    );
  }
}
