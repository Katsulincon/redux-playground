import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import handleCounter from '../actions/index';

const increment = () => ({ type: 'INCREMENT' });


class Counter extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     count: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }


  // handleClick() {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1
  //     };
  //   });
  // }

  handleClick() {
    this.props.handleCounter();
  }

  render() {
    return (
      <div className="count">
        <h1>{this.props.count}</h1>
        <button onClick={(e) => this.handleClick()}>up</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { handleCounter: handleCounter },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(Counter);
