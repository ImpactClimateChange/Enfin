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
          <ul className={styles.bio}>Sources
              <li>EPA eGRID Summary Tables and Data Files</li>
              <li>U.S. Department of Energy</li>
              <li>Energy Information Agency, US Census Bureau</li>
              <li>US DOE 1605(b) Voluntary Reporting of Greenhouse Gases Program</li>
              <li>DOE EIA Fuel Oil and Kerosene Sales 2014</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Research;
