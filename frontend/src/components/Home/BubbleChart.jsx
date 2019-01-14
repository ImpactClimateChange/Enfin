import React, { Component } from 'react';
// import styles from '../../styles/Home.module.css';
// import './App.css';
// import { scaleLinear } from 'd3-scale';
// import { max } from 'd3-array';
// import { select } from 'd3-selection';

class BubbleChart extends Component {
  constructor(props) {
    super(props);
    this.createBubbleChart = this.createBubbleChart.bind(this);
  }
  componentDidMount() {
    this.createBubbleChart();
  }
  componentDidUpdate() {
    this.createBubbleChart();
  }

  render() {
    return <div>this.props.emissions</div>;
  }
}
export default BubbleChart;
