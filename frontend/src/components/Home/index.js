import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import Flexbox from 'flexbox-react';
import Progress from './Progress';
// import BarChart from './BarChart';
import MyPie from './MyPie';
import TimeRange from './TimeRange';
import ImpactStatement from './ImpactStatement';
import Footer from '../Splash/Footer';
// import Modal from './Modal';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      emissions: 0,
      cost: 0,
      offsetNeeded: 0,
      offsetDonation: 0,
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
        console.log('emissions', emissions);
        const cost = data['cost'];
        console.log('cost', cost);
        const offsetNeeded = data['offsetNeeded'];
        console.log('offsetNeeded', offsetNeeded);
        const breakdown = data['breakdown'];
        if (breakdown) {
          const offsetDonation = breakdown['offsetDonation']['cost'];
          console.log("offsetDonation", offsetDonation);
          delete breakdown.offsetDonation;
          this.setState({ emissions, cost, offsetNeeded, offsetDonation, breakdown, timeRange });
        }
      });
  }
  componentDidMount() {
    this.getBreakdown(this.state.timeRange);
  }
  render() {
    var data = this.state.breakdown
      ? Object.keys(this.state.breakdown).map(category => {
          return [category, this.state.breakdown[category]['emissions']];
        })
      : [];

    return (
      <div>
        <div className={styles.timeRange}>
          <TimeRange getBreakdown={this.getBreakdown} />
        </div>

        <div />
        <Flexbox minHeight="100vh" justifyContent="space-around">
          <MyPie data={data} />
          <div>
            <ImpactStatement
              emissions={this.state.emissions}
              offset={this.state.offsetDonation}
              timeRange={this.state.timeRange}
            />
            <div>
              <Progress emissions={this.state.emissions} offset={this.state.offsetDonation} />
           </div>
          </div>
        </Flexbox>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
