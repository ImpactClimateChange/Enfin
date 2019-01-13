import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

class Intro extends Component {
  render() {
    return (
      <div>
        <div>
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <h1><span>en</span><span>fin</span>: <span>environmental </span><span>finance</span></h1>
              <h2>offsetting your carbon emissions</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
