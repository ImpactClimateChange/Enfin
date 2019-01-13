import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
// import GoogleButton from 'react-google-button';
import { Button } from 'reactstrap';

class Footer extends Component {
  render() {
    return (
      <div>
        <div className={styles.footerBackground}>
          <div>
            <div className={styles.footer}>
              <p>contact info here</p>
            </div>
          </div>
          <div>
            <Button outline color='primary'>SIGN UP</Button>{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
