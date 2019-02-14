import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';

class Product extends Component {
  render() {
    return (
      <div>
        <div className={styles.descriptionBio}>
          <h2>Our Product</h2>
          <p className={styles.bio}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti non magni, deleniti quas obcaecati doloribus ducimus at, animi iusto vitae cum eum tempore commodi sapiente sequi odit, sunt laboriosam labore?
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
