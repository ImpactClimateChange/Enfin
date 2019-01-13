import React, { Component } from 'react';
// import styles from '../../styles/Home.module.css';
import Flexbox from "flexbox-react";
import Progress from './Progress';
import ImpactStatement from './ImpactStatement'

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Progress />
        </div>
        <Flexbox minHeight="100vh" justifyContent="space-around">
          <Flexbox element="header" flexGrow={2} height="60px">
            Emissions
          </Flexbox>
<<<<<<< HEAD
          <Flexbox flexGrow={1}>Impact</Flexbox>
=======
          <Flexbox><ImpactStatement /></Flexbox>
>>>>>>> c7de77d88a4d8989897c2df9f71ef14bc07bd16c
        </Flexbox>
      </div>
    );
  }
}

export default Home;
