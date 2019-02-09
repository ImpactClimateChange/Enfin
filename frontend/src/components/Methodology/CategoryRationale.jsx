import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';


class CategoryRationale extends Component {
  render() {
    return (
      <div id={this.props.id} className={styles.descriptionInnerInner}>
        <h4>{this.props.displayName}</h4>
        <div>
          <code>{this.props.conversionFunction}</code>
          <p>{this.props.conversionRationale}</p>
        </div>
      </div>
    );
  }
}

export default CategoryRationale;
