import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import { Button } from 'reactstrap';


class Charity extends Component {
  render() {
    return  <div>
              <h5 className={styles.centerNoFlex}>{this.props.info.name}</h5>
              <div className={styles.centerNoFlex}><img src={this.props.info.image} width="200px" height="200px" alt={this.props.info.name} /></div>
              <div className={styles.centerNoFlex}><Button>Donate</Button></div>
            </div>;
  }
}

export default Charity;
