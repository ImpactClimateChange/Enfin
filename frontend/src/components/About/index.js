import React, { Component } from 'react';
// import styles from '../../styles/Splash.module.css';
import Headshots from './Headshots';
import Footer from '../Splash/Footer';


class About extends Component {
  render() {
    return (
      <div>
        <Headshots />
        <Footer />
      </div>
    );
  }
}

export default About;
