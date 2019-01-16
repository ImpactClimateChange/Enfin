import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import IMAGES from '../../images/donate_logos';
import { Button } from 'reactstrap';
class Modal extends React.Component {
  render() {
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'center',flexDirection:"column", alignItems:"center"}}>
          <h2>Offset your Carbon Cost</h2>
          <h4>Consider donating to these Climate Change oriented charities</h4>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'space-around',
            flexDirection: 'column'
          }}
        >
          <div
            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'space-around' }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <a href="https://www.coolearth.org/get-involved/donate-cool-earth/">
                <img src={IMAGES[0]} alt="Cool Earth logo" width="150px" />
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <a href="https://mercyforanimals.org/donate">
                <img
                  width="150px"
                  src="https://mfa.cachefly.net/mfa/images/mercy-for-animals-logo-color.png"
                  alt=""
                />
              </a>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexDirection: 'column'
              }}
            >
              <a href="/">
                <img src={IMAGES[1]} alt="" width="150px" />
              </a>
            </div>
          </div>
          <div
            style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'space-around' }}
          >
            <Button outline color="primary">
              Donate $1.37 per Metric Ton
            </Button>
            <Button outline color="primary">
              Donate $4.27 per Metric Ton
            </Button>
            <Button outline color="primary">
              Donate $10.00 per Metric Ton
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
