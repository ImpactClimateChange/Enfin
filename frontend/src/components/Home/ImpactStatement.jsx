import React, { Component } from 'react';
import { Button } from 'reactstrap';
// import styles from '../../styles/Home.module.css';

//amount of resource equivalent to 1 kg carbon emission
const EMISSIONS_TO_RESOURCE = {
  tree: 1 / 500, //1 tree life == 500 kg carbon sequestration
  nyc_seconds: 1 / 1648.9, //1 second nyc === 1648.9 kg carbon emission   https://www.dec.ny.gov/docs/administration_pdf/nycghg.pdf
  car_miles: 1 / 10, //10 kg of carbon for 1 mile of driving on diesel fuel
  lightbulb_years: 1 / 750 //750kg carbon for leaving a 100w lightbulb on for a year https://www.saving-light-bulbs.co.uk/blog/how-much-co2-does-a-light-bulb-create/
};

class ImpactStatement extends Component {
  render() {
    return (
      <div className='dataSection'>
        <h3>Your Carbon Impact</h3>
        <p>
          In the last {Math.round(this.props.timeRange)} days, your spending has caused
          <b>{Math.round(this.props.emissions)} kg of CO2 emissions.</b>
        </p>
        <p>That's equivalent to: </p>
        <ul>
          <li>
            Keeping {Math.round(EMISSIONS_TO_RESOURCE['lightbulb_years'] * this.props.emissions)}
            lightbulbs continuously on for a year
          </li>
          <li>
            Powering New York City for
            {(EMISSIONS_TO_RESOURCE['nyc_seconds'] * this.props.emissions).toFixed(2)} seconds
          </li>
          <li>
            Driving an average car
            {Math.round(EMISSIONS_TO_RESOURCE['car_miles'] * this.props.emissions)} miles
          </li>
        </ul>
        <p>
          Planting {Math.round(EMISSIONS_TO_RESOURCE['tree'] * this.props.emissions)} trees would
          entirely absorb these carbon emissions. <br /> <b>Take action now!</b>
        </p>
        <Button
          outline
          color="primary"
          onClick={() => {
            console.log('REDUCE!');
          }}
        >
          Reduce Your Carbon Footprint
        </Button>{' '}
        <Button
          outline
          color="primary"
          onClick={() => {
            console.log('REDUCE!');
          }}
        >
          Offset Your Carbon Footprint
        </Button>
      </div>
    );
  }
}

export default ImpactStatement;
