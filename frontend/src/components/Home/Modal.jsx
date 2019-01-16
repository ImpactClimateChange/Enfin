import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Button } from 'reactstrap';

class Modal extends React.Component {
    render() {
      return (
        <div>
        <h2>Offset your Carbon Cost</h2>
        <h4>Consider donating to these Climate Change oriented charities</h4>
        <ul>
            <li><a className={styles.italic} href='https://www.coolearth.org/'>Cool Earth</a></li>
            <li><a className={styles.italic} href='https://mercyforanimals.org/'>Mercy for Animals</a></li>
            <li>Charity C</li>
            <li>Charity D</li>
        </ul>


        </div>

      );
    }
  }

  export default Modal;