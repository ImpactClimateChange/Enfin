import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Container, Row, Col } from 'reactstrap';

class Headshots extends Component {
  render() {
    return (
      <div className={styles.description}>
        <div className={styles.descriptionBio}>
          <h1 className={styles.italic}><span>enfin</span>: <span className={styles.green}>environmental finance</span></h1>
          <br></br>
          <h2>Mission Statement</h2>
          <p className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <br></br>
          <h2>Meet the team</h2>
          <Container fluid style={{ lineHeight: '32px' }}>
            <Row debug>
              <Col debug><img src='images/customer-512.png' alt='James'/></Col>
              <Col debug><img src='images/customer-512.png' alt='Abe'/></Col>
              <Col debug><img src='images/customer-512.png' alt='Isabelle'/></Col>
              <Col debug><img src='images/customer-512.png' alt='Chris'/></Col>
            </Row>
            <br />
            <Row debug>
              <Col debug>James Wang</Col>
              <Col debug>Abe Miller</Col>
              <Col debug>Isabelle De Brabanter</Col>
              <Col debug>Chris Hays</Col>
            </Row>
            <br />
            <Row debug>
              <Col debug className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
              <Col debug className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col> 
              <Col debug className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
              <Col debug className={styles.bio}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
            </Row>
        </Container>
        </div>
      </div>  
    );
  }
}

export default Headshots;