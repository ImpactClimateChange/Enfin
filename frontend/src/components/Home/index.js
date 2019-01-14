import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import Flexbox from 'flexbox-react';
import Progress from './Progress';
import BubbleChart from './BubbleChart';
import TimeRange from './TimeRange';
import ImpactStatement from './ImpactStatement';
import { runInThisContext } from 'vm';
import BarChart from './BarChart';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      emissions: 0,
      cost: 0,
      offset: 0,
      breakdown: null,
      timeRange: 30
    };
    this.getBreakdown = this.getBreakdown.bind(this);
  }
  getBreakdown(timeRange) {
    window
      .fetch('/breakdown/' + timeRange.toString())
      .then(response => response.json())
      .then(data => {
        const emissions = data['emission'];
        const cost = data['cost'];
        const offset = data['offset'];
        const breakdown = data['breakdown'];
        this.setState({ emissions, cost, offset, breakdown });
      });
  }
  componentDidMount() {
    this.getBreakdown(this.state.timeRange);
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className={styles.timeRange}>
          <TimeRange getBreakdown={this.getBreakdown} />
        </div>

        <div>
          <Progress emissions={this.state.emissions} offset={this.state.offset}/>
        </div>
        <Flexbox minHeight="100vh" justifyContent="space-around">
          <Flexbox element="header" height="60px">
            Emissions
            {/* <BubbleChart emmissions = {this.state.emissions} breakdown = {this.state.breakdown} /> */}
            {/* <BarGraph data={[5,10,1,3,6,7,8, 1100]} size={[500,500]} /> */}
            {/* <BarChart data={
              Object.keys(this.state.breakdown).map((category) =>
              {return(this.state.breakdown[category]['emissions'])})} size={[500,500]}/> */}
          </Flexbox>
          <Flexbox>
            <ImpactStatement emissions={this.state.emissions} offset={this.state.offset} timeRange={this.state.timeRange}/>
          </Flexbox>
        </Flexbox>
      </div>
      
    );
  }
}

export default Home;
