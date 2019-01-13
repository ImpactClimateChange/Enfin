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
          <Flexbox element="header" height="60px">
            Emissions
          </Flexbox>
          <Flexbox><ImpactStatement /></Flexbox>
        </Flexbox>
      </div>
    );
  }
}

export default Home;
