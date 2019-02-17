import React, { Component } from 'react';
// import { Line, Circle } from 'rc-progress';
// import Flexbox from 'flexbox-react';
import styles from '../../styles/Home.module.css';
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
// import '../../styles/Progress.module.css';
import './Progress.css'

class Progess extends Component {
  constructor() {
    super();
    this.state = {
      emissionsPercent: 0,
      offsetPercent: 0,
      emissionsKgDisplay: 0,
      offsetKgDisplay: 0,
    };
    this.emissionsIncrease = this.emissionsIncrease.bind(this);
    this.offsetIncrease = this.offsetIncrease.bind(this);
  }

  componentDidMount() {
    this.emissionsIncrease();
    this.offsetIncrease();
  }

  componentWillReceiveProps() {
    // setting state without setState() 
    // because the asyc state change
    // does not update the state fast  
    // enough for the base case check
    // inside emissionsIncrease
    this.state = {
      emissionsPercent: 0,
      offsetPercent: 0,
      emissionsKgDisplay: 0,
      offsetKgDisplay: 0
    };
    this.emissionsIncrease();
    this.offsetIncrease();
  }

  emissionsIncrease() {
    const emissionsPercent = this.props.emissions !== 0 ? this.state.emissionsPercent + 1 : 0;
    var emissionsKgDisplay = Math.floor(
      (this.state.emissionsPercent * (this.props.emissions + this.props.offset)) / 100
    );
    const percentTarget = (this.props.emissions / (this.props.emissions + this.props.offset)) * 100;
    if (emissionsPercent >= percentTarget) { // base case - 
      emissionsKgDisplay = Math.round(this.props.emissions);
      this.setState({ emissionsKgDisplay });
      clearTimeout(this.tm);
      return;
    }
    this.setState({ emissionsPercent, emissionsKgDisplay });
    this.tm = setTimeout(this.emissionsIncrease, 5);
  }

  offsetIncrease() {
    const offsetPercent = this.props.offset !== 0 ? this.state.offsetPercent + 1 : 0;
    var offsetKgDisplay = Math.floor(
      (this.state.offsetPercent * (this.props.emissions + this.props.offset)) / 100
    );
    const pct = (this.props.offset / (this.props.emissions + this.props.offset)) * 100;
    if (offsetPercent >= pct) {
      offsetKgDisplay = Math.round(this.props.offset);
      clearTimeout(this.to);
      this.setState({ offsetKgDisplay });
      return;
    }
    this.setState({ offsetPercent });
    this.to = setTimeout(this.offsetIncrease, 5);
  }

  render() {
    return (
      <div className={styles.dataSection}>
        <Container>
          <Row>
            <Col md={1}>
              <div className={styles.center} style={{ marginRight: '20px' }}>
                <h5>Emission</h5>
              </div>
            </Col>
            <Col md={8}>
              <div className={styles.progressBar}>
                <Progress striped color="danger" value={this.state.emissionsPercent} />
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.percent}>
                <p>{this.state.emissionsKgDisplay} kg CO2</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              <div className={styles.center} style={{ marginRight: '20px' }}>
                <h5>Offset</h5>
              </div>
            </Col>
            <Col md={8}>
              <div className={styles.progressBar}>
                <div>
                  <Progress striped color="green" value={this.state.offsetPercent} />
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className={styles.percent}>
                <p>{this.state.offsetKgDisplay} kg CO2</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Progess;
