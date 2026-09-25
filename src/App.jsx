import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter App</h1>
        <p>
          Current Count: <strong>{this.state.count}</strong>
        </p>
        <button onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }
}

export default Counter;