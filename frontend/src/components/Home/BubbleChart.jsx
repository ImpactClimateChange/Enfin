<<<<<<< HEAD
import React            from 'react';
import ReactBubbleChart from 'react-bubble-chart';

var colorLegend = [
  //reds from dark to light
  {color: "#67000d", text: 'Negative', textColor: "#ffffff"}, "#a50f15", "#cb181d", "#ef3b2c", "#fb6a4a", "#fc9272", "#fcbba1", "#fee0d2",
  //neutral grey
  {color: "#f0f0f0", text: 'Neutral'},
  // blues from light to dark
  "#deebf7", "#c6dbef", "#9ecae1", "#6baed6", "#4292c6", "#2171b5", "#08519c", {color: "#08306b", text: 'Positive', textColor: "#ffffff"}
];

var tooltipProps = [{
  css: 'symbol',
  prop: '_id'
}, {
  css: 'value',
  prop: 'value',
  display: 'Last Value'
}, {
  css: 'change',
  prop: 'colorValue',
  display: 'Change'
}];

class BubbleChart extends React.Component {
  render () {
    var data = this.props.data

    return <ReactBubbleChart
      data={data}
    />;
  }
}

=======
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
>>>>>>> 047a3bf50473eaa50e13ca2615252e0725a44e70
export default BubbleChart;
