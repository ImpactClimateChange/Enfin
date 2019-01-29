import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';

class Charity extends Component {
  render() {
    return (
      <div>
        <h5 className={styles.centerNoFlex} >{this.props.info.name}</h5>
        <img src={this.props.info.image} width='250px' alt='James'/>
      </div>
    );
  }
}

export default Charity;
