import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Button } from 'reactstrap';

class Intro extends Component {
  render() {
    return (
      <div>
        <div className={styles.backgroundimg}>
          <div className={styles.description}>
            <div className={styles.descriptionInner}>
              <h1>
                <span>en</span>
                <span>fin</span>: <span>environmental </span>
                <span>finance</span>
              </h1>
              <h2>offsetting your carbon emissions</h2>
              <Button outline color="primary">
                SIGN UP
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
