import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

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
          
        </div>
      </div>
    );
  }
}

export default Footer;
