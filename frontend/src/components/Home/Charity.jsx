import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

class Charity extends Component {
  render() {
    return (
      <div>{this.props.info.toString()}</div>
    );
  }
}

export default Charity;
