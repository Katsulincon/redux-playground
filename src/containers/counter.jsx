import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }

  render() {
    return (
      <div className="count">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>up</button>
      </div>
    );
  }
}


export default Counter;
