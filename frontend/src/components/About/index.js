import React, { Component } from 'react';
// import styles from '../../styles/Splash.module.css';
import Footer from '../Splash/Footer';
import Mission from './Mission';
import Headshots from './Headshots';
import styles from '../../styles/Splash.module.css';

// import { IMAGES } from '../../images/headshots/images.js';


class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <Mission />
            <Headshots />
          </div>
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default About;
