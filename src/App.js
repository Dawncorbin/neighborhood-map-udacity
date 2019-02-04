import React, { Component } from 'react';
import './App.css';
import Map from './component/Map';
import SquareAPI from './API/';

class App extends Component {
    constructor(){
        super();
        this.state ={
          venues:[],
          markers:[],
          center:[],
          zoom: 12
        }
    }
  componentDidMount() {
      SquareAPI.search({
          near:'Austin,TX',
          query: 'tacos',
          limit: 10
      }).then(results => {console.log(results)
      });
  }
  render() {
    return (
      <div className="App">
        <Map/>

      </div>
    );
  }
}

export default App;
