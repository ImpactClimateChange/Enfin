import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';


class Headshots extends Component {
  render() {
    return (
      <div>
        <div className={styles.backgroundimg}>
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <p>Meet the team</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Headshots;