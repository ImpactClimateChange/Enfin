import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Container, Row, Col } from 'reactstrap';
import IMAGES from '../../images';
import Headshots from './Headshots';

class Mission extends Component {
  render() {
    return (
        <div>
          <div className={styles.descriptionBio}>
            <h1 className={styles.italic}>
              <span>enfin</span>: <span className={styles.green}>environmental finance</span>
            </h1>
            <br />
            <h2>Mission Statement</h2>
            <p className={styles.bio}>
              The Enfin Team was incubated at the 2019{' '}
              <a className={styles.italic} href="https://www.impactlabs.io/fellowship">
                Impact Labs Fellowship
              </a>
              . This hackathon style event prompted us to create a technological solution to a
              social good problem. We were all passionate about Climate Change reversal and thus,
              Enfin was born.
            </p>
            <br />
          </div>
        </div>
    );
  }
}

export default Mission;
