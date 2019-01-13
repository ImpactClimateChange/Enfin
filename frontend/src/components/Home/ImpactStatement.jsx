import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

//amount of resource equivalent to 1 kg carbon emission
const EMISSIONS_TO_RESOURCE = {
  tree: 1 / 500, //1 tree life == 500 kg carbon sequestration
  nyc_seconds: 1 / 1648.9 //1 second nyc === 1648.9 kg carbon emission
};

class ImpactStatement extends Component {
  constructor() {
    super();
    this.state = {
      days: 30,
      emissions: 9000
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ margin: 20 }}>
        <h3>Your Carbon Impact</h3>
        <p>
          In the last {this.state.days} days, your spending has caused{' '}
          <b>{this.state.emissions} kg of CO2 emissions.</b>
        </p>
        <p>That's equivalent to: </p>
        <ul>
          <li>Cutting down {EMISSIONS_TO_RESOURCE['tree'] * this.state.emissions} trees.</li>
          <li>
            Powering New York City for {EMISSIONS_TO_RESOURCE['nyc_seconds'] * this.state.emissions}{' '}
            seconds
          </li>
        </ul>
      </div>
    );
  }
}

export default ImpactStatement;
