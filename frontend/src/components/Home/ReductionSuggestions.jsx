import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Button } from 'reactstrap';

class ReductionSuggestions extends Component {
    render() {
      return (
        <div>
        <h2>Reduce your Carbon Emissions</h2>
        <h4>Consider following these recommendations</h4>
        <ul>
            <li>Limit your air travel</li>
            <li>Eat less meat</li>
        </ul>
        </div>

      );
    }
  }

export default ReductionSuggestions;