import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

class ImpactStatement extends Component {
  constructor() {
    super();
    this.state = {
      days: 30,
      emissions: 9000,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <h3>Your Carbon Impact</h3>
        <p>In the last {this.state.days} days, your spending has caused <b>{this.state.emissions} kg of CO2 emissions.</b></p>
      </div>
    );
  }
}

export default ImpactStatement;