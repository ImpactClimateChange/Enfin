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
<<<<<<< HEAD
              <h1><span>enfin</span>: <span className={styles.green}>environmental finance</span></h1>
              <p>offsetting your carbon emissions</p>
              <Button outline color='primary'>SIGN UP</Button>{' '}
=======
              <h1>
                <span>en</span>
                <span>fin</span>: <span>environmental </span>
                <span>finance</span>
              </h1>
              <h2>offsetting your carbon emissions</h2>
              <Button outline color="primary">
                SIGN UP
              </Button>
>>>>>>> 047a3bf50473eaa50e13ca2615252e0725a44e70
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;
