import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';

class Product extends Component {
  render() {
    return (
      <div>
        <div className={styles.descriptionBio}>
          <h2>Our Product</h2>
          <p className={styles.bio}>
            Enfin is a web and mobile application allowing users
            to first deeply understand their carbon footprint, 
            then act on that understanding. Other services exist 
            which analyze a users carbon footprint by making them 
            fill out quizzes about their lifestyle, but these are often 
            inaccurate and surface level, not to mention time-consuming. 
            Enfin can retrieve rich unbiased data about your lifestyle 
            almost instantly with your existing financial data.
            From this data, we extract the environmental impact 
            encoded within your past financial decisions as determined
            by the emissions demand that you've generated. 
          </p>
          <p className={styles.bio}>
            With Enfin, you can gain understanding about 
            where exactly in your lifestyle your 
            emissions come from, and how to reduce them... 
            All within one or two minutes.
          </p>
        </div>
      </div>
    );
  }
}

export default Product;
