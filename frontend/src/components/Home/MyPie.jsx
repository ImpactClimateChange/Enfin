import React, { Component } from 'react';
import ReactChartkick, { PieChart } from 'react-chartkick';
import Chart from 'chart.js';
import styles from '../../styles/Home.module.css';

ReactChartkick.addAdapter(Chart)

class MyPie extends Component {
  render() {
    return (
      <div className={styles.dataSection} element="header" height="60px">
        <h3 className={styles.center}>Emission Breakdown</h3>
        <PieChart 
          data={this.props.data} 
          donut={true} 
          width="500px" 
          height="500px" 
        />
      </div>
    );
  }
}

export default MyPie;
