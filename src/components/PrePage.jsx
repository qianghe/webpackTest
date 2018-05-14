import React, { Component } from 'react'
import Title from './HelloWorld';
import Footer from './Leave';

class PrePage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Title name="heqiang" />
        <p>It's time to say hello!</p>
        <Footer />
      </div>
    );
  }
}

export default PrePage;
