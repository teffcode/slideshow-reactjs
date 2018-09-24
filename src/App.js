import React, { Component } from 'react';

import data from './data/data';
import Card from './Card';

import './App.css';

class App extends Component {
  state = {
      properties: data.properties, 
      property: data.properties[0] 
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const { properties, property } = this.state;
    console.log(data.properties.length)

    return (
      <div>
        <button 
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        > PREV </button>
        <button 
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length-1}
        > NEXT </button>

        <Card property={property}/>
      </div>
    );
  }
}

export default App;
