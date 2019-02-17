import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styles from '../../styles/Home.module.css';

class TimeRange extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      color: 'grey'
    };
    // this.increase = this.increase.bind(this);
  }

  // getBreakdown is called twice on click because otherwise the progressbar only halfway updates.
  // TODO fix progressbar and only call this function once timeRange change.
  // ALSO make getBreakdown dynamic and store the Breakdown for different timeranges so flipping
  //      back to a range that was previously loaded doesnt make a new api query
  render() {
    return (
      <div className={styles.timeRange}>
        <Button outline color="primary" onClick={() => {this.props.getBreakdown(30);}}>
          1 Month
        </Button>
        <Button outline color="primary" onClick={() => {this.props.getBreakdown(90);}}>
          3 Months
        </Button>
        <Button outline color="primary" onClick={() => {this.props.getBreakdown(180);}}>
          6 Months
        </Button>
        <Button outline color="primary" onClick={() => {this.props.getBreakdown(365);}}>
          1 Year
        </Button>
        <Button outline color="primary" onClick={() => {this.props.getBreakdown(600);}}>
          All time
        </Button>
      </div>
    );
  }
}

export default TimeRange;
