import React, { Component } from 'react';
// import styles from '../../styles/Splash.module.css';
import Intro from './Intro';
import Footer from './Footer';
// import { IMAGES } from '../../images/volunteer_app/images.js';

class Splash extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Footer/>
      </div>
    );
  }
}

export default Splash;
