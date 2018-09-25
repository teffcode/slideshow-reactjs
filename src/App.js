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

    return (
      <div className="App">
        <button 
          onClick={() => this.prevProperty()}
          disabled={property.index === 0}
        > PREV </button>
        <button 
          onClick={() => this.nextProperty()}
          disabled={property.index === data.properties.length-1}
        > NEXT </button>
        <div className={`cards-slider active-slide-${property.index}`}>
          <div 
            className="cards-slider-wrapper"
            style={{
              'transform': `translateX(-${property.index*(100/properties.length)}%)`
            }}>
            {
              properties.map( property => <Card  key={property.index}  property={property}/> )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
