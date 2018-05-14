import React, { Component } from 'react'
import Title from './HelloWorld';
import Footer from './Leave';

class NextPage extends Component {
  state = {}
  render() {
    return (
      <div>
        <Title name="heqinag" />
        <p>It's time to say goodbye!</p>
        <Footer />
      </div>
    );
  }
}

export default NextPage;
