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

const SHOW_NAME = {
  airTravel: 'Air Travel',
  carTravel: 'Car Travel',
  utility: 'Utilities',
  grocery: 'Groceries',
  fastFood: 'Fast Food',
  resturantOther: 'Resturants',
  shopping: 'Shopping',
  other: 'Other'
};

class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      emissions: 0,
      cost: 0,
      offsetDonation: 0,
      breakdown: null,
      timeRange: 30,
      responseCache: {}
    };
    this.getBreakdown = this.getBreakdown.bind(this);
    this.stateUpdateFromData = this.stateUpdateFromData.bind(this);
    this.clone = this.clone.bind(this);
  }

  getBreakdown(timeRange) {
    if (this.state.responseCache[timeRange.toString()]) {
      this.stateUpdateFromData(this.state.responseCache[timeRange.toString()], timeRange);
    } else {
      this.setState(Object.assign(this.state, { loading: true }));
      window
        .fetch('/breakdown/' + timeRange.toString())
        .then(response => {
          console.log('Retrieved data!');
          console.log(response);
          return response.json()
        })
        .then(data => {
          console.log(data);
          this.stateUpdateFromData(data, timeRange)
        });
    }
  }

  clone(src) {
    JSON.parse(JSON.stringify(src));
  }

  stateUpdateFromData(data, timeRange) {
    const loading = false;
    const emissions = data['emission'];
    const cost = data['cost'];
    const breakdown = data['breakdown'];
    if (breakdown) {
      const responseCache = this.state.responseCache;
      responseCache[timeRange.toString()] = data;
      const offsetDonation = breakdown['offsetDonation']['cost'];
      this.setState({
        loading,
        responseCache,
        emissions,
        cost,
        offsetDonation,
        breakdown,
        timeRange
      });
    }
  }

  componentDidMount() {
    console.log("Attempting to fetch financial data");
    this.getBreakdown(this.state.timeRange);
  }

  render() {
    var data = this.state.breakdown
      ? Object.keys(this.state.breakdown)
          .filter(category => category !== 'offsetDonation')
          .map(category => {
            return [SHOW_NAME[category], this.state.breakdown[category]['emissions']];
          })
      : [];

    return ( this.state.loading ? <h1>Getting your data...</h1> :
      <div>
        <div className={styles.timeRange}>
          <TimeRange getBreakdown={this.getBreakdown} />
        </div>

        <div />
        <Flexbox minHeight="100vh" justifyContent="space-around">
          <MyPie data={data} />
          <div style={{ width: '43%' }}>
            <ImpactStatement
              emissions={this.state.emissions}
              offset={this.state.offsetDonation}
              timeRange={this.state.timeRange}
              breakdown={this.state.breakdown}
            />
            <div>
              <Progress emissions={this.state.emissions} offset={this.state.offsetDonation} />
            </div>
          </div>
        </Flexbox>
        <Footer />
      </div>
    );
  }
}

export default Home;
