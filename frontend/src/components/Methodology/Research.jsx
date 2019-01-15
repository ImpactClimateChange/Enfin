import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';

class Research extends Component {
  render() {
    return (
      <div className={styles.description}>
        <div className={styles.descriptionBio}>
          <h1 className={styles.italic}>
            <span>enfin</span>: <span className={styles.green}>environmental finance</span>
          </h1>
          <br />
          <h2>Methodology & Research</h2>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
      </div>
    );
  }
}

export default Research;
