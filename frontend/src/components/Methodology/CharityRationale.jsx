import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import homeStyles from '../../styles/Home.module.css'

class CharityRationale extends Component {
  render() {
    return (
      <div id={this.props.id} className={styles.descriptionInnerInner}>
        <h4>{this.props.displayName}</h4>
        <div>
          <span className={homeStyles.charityRate}>
            ${this.props.ratePerKg} per kg CO2
          </span>
          <p>
            {this.props.rateRationale}
          </p>
        </div>
      </div>
    );
  }
}

export default CharityRationale;
