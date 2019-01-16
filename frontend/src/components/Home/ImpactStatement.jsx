import React, { Component } from 'react';
import { Button } from 'reactstrap';
import styles from '../../styles/Home.module.css';
import Popup from "reactjs-popup";
import Modal from './Modal';
import Modal2 from './Modal2';

//amount of resource equivalent to 1 kg carbon emission
const EMISSIONS_TO_RESOURCE = {
  tree: 1 / 500, //1 tree life == 500 kg carbon sequestration
  nyc_seconds: 1 / 1648.9, //1 second nyc === 1648.9 kg carbon emission   https://www.dec.ny.gov/docs/administration_pdf/nycghg.pdf
  car_miles: 1 / 10, //10 kg of carbon for 1 mile of driving on diesel fuel
  lightbulb_years: 1 / 750 //750kg carbon for leaving a 100w lightbulb on for a year https://www.saving-light-bulbs.co.uk/blog/how-much-co2-does-a-light-bulb-create/
};

class ImpactStatement extends Component {
  constructor(props) {
    super(props);
    this.augmentedEmissions = this.augmentedEmissions.bind(this);
  }
  augmentedEmissions(type) {
    const result = (this.props.emissions - this.props.offset);
    return type ? EMISSIONS_TO_RESOURCE[type] * result : result;
  }
  render() {
    return (
      <div className={styles.dataSection}>
        <h3 className={styles.center}>Your Carbon Impact</h3>
        <p>
          In the last {Math.round(this.props.timeRange)} days, your spending has caused{' '}
          <b>{Math.round(this.augmentedEmissions())} kg of CO2 emissions.</b>
        </p>
        <p>That's equivalent to: </p>
        <ul>
          <li>
            Keeping {Math.round(this.augmentedEmissions('lightbulb_years'))}{' '}
            lightbulbs continuously on for a year
          </li>
          <li>
            Powering New York City for{' '}
            {this.augmentedEmissions('nyc_seconds').toFixed(2)} seconds
          </li>
          <li>
            Driving an average car{' '}
            {Math.round(this.augmentedEmissions('car_miles'))} miles
          </li>
        </ul>
        <p>
          Planting {Math.round(this.augmentedEmissions('tree'))} trees would{' '}
          entirely absorb these carbon emissions. <br />
        </p>
        <div>
        <Popup trigger={<Button
            outline
            color="primary"
            onClick={() => {
              console.log('OFFSET!');
            }}
          >
            Reduce Your Carbon Emissions
          </Button>} position="right center" modal>
            <Modal2/>
          </Popup>


          <Popup trigger={<Button
            outline
            color="primary"
            onClick={() => {
              console.log('OFFSET!');
            }}
          >
            Offset Your Carbon Emissions
          </Button>} position="right center" modal>
            <Modal/>
          </Popup>
          
        </div>
      </div>
    );
  }
}

export default ImpactStatement;
