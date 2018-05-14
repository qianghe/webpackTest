import React, { Component } from 'react';
import Title from './HelloWorld';
import './index.css';

class Content extends Component {
  state = {}
  componentDidMount() {
    console.log('did mount');
  }
  render() {
    return (
      <div className="contaner">
        <Title />
        <p>from the earth ...</p>
      </div>
    )
  }
}
export default Content;
