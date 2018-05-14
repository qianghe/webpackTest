import React, { Component } from 'react';

class HelloWorld extends Component {
  state = {}
  render() {
    return (
      <h1>hello world! {this.props.name} girl</h1>
    );
  }
}
// const HelloWorld = (props) => (
//   <h1>hello world! {props.name} girl, {props.message}</h1>
// );

export default HelloWorld;
