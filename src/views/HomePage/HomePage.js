import React, { Component } from 'react';
import { Jumbotron } from '../../components';
import image from '../../assets/img/bg.png';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Jumbotron key="Jumbotron" image={image} />
      </div>
    );
  }
}

export default HomePage;
