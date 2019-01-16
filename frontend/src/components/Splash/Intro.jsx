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
              <h1><span>enfin</span>: <span className={styles.green}>environmental finance</span></h1>
              <p>every dollar spent has an environmental impact<br/><br/>
              understand your spending <br/>
              understand your carbon footprint</p>
              <Button outline color='primary'>SIGN UP</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
