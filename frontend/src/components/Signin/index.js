import React, { Component } from 'react';
// import styles from '../../styles/Splash.module.css';
// import { IMAGES } from '../../images/volunteer_app/images.js';

class Splash extends Component {
  render() {
    // if (!this.props.isOpen) {
    //   return null;
    // }
    return (
      <div>
        <form>
          <div class="container">
            <h3> Add a donation </h3>
            <label for="organization">
              <b> Organization </b>
            </label>
            <input type="text" placeholder="Enter organization name" name="organization" required />

            <label for="amount">
              <b> Amount donated </b>
            </label>
            <input type="amount" placeholder="Enter amount donated" name="amount" required />
            <button onClick={this.props.closePopup}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Splash;
