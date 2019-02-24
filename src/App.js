import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    counter: 0
  }

  onDecrement = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    }
    else {
      alert('Value cant be below 0');
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently: {this.state.counter}</h1>
        <button
          data-test="increment-button"
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >Increment counter</button>

        <button
          data-test="decrement-button"
          onClick={this.onDecrement}
        >Decrement counter</button>
      </div >
    );
  }
}

export default App;
