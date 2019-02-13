import React, { Component } from 'react';
// import styles from '../../styles/Splash.module.css';
import Footer from '../Splash/Footer';
import Mission from './Mission';
import Product from './Product';
import Headshots from './Headshots';
import styles from '../../styles/Splash.module.css';

// import { IMAGES } from '../../images/headshots/images.js';


class About extends Component {
  render() {
    return (
      <div>
        <div className={styles.description}>
          <div className={styles.descriptionInner}>
            <h1 className={styles.italic}>
              <span>enfin</span>: <span className={styles.green}>environmental finance</span>
            </h1>
            <Mission />
            <Product />
            <Headshots />
          </div>
        </div>
        <Footer />
      </div>
      
    );
  }
}

export default About;
