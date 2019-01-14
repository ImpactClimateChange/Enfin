import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
// import Flexbox from 'flexbox-react';
import styles from '../../styles/Home.module.css';
import { Progress } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';

class Progess extends Component {
  constructor() {
    super();
    this.state = {
      emissionsPercent: 0,
      offsetPercent: 0,
      color: 'red'
    };
    this.emissionsIncrease = this.emissionsIncrease.bind(this);
    this.offsetIncrease = this.offsetIncrease.bind(this);
  }

  componentDidMount() {
    this.emissionsIncrease();
    this.offsetIncrease();
  }

  emissionsIncrease() {
    const emissionsPercent = (this.props.emissions !== 0) ? this.state.emissionsPercent + 1 : 0;
    const pct = this.props.emissions / (this.props.emissions + this.props.offset) * 100;
    if (emissionsPercent >= pct) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ emissionsPercent });
    this.tm = setTimeout(this.emissionsIncrease, 5);
  }

  offsetIncrease() {
    const offsetPercent = (this.props.offset !== 0) ? this.state.offsetPercent + 1 : 0;
    const pct = this.props.offset / (this.props.emissions + this.props.offset) * 100;
    if (offsetPercent >= pct) {
      clearTimeout(this.to);
      return;
    }
    this.setState({ offsetPercent });
    this.to = setTimeout(this.offsetIncrease, 5);
  }

  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col md={1}>
              <div className={styles.center}>
                <h5>Emissions</h5>
              </div>
            </Col>
            <Col md={10}>
              <div className={styles.progressBar}>
                <Progress striped color="danger" value={this.state.emissionsPercent} />
              </div>
            </Col>
            <Col md={1}>
              <div className={styles.percent}>
                <p>{Math.floor(this.state.emissionsPercent*(this.props.emissions+this.props.offset)/100)}</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={1}>
              <div className={styles.center}>
                <h5>Offset</h5>
              </div>
            </Col>
            <Col md={10}>
              <div className={styles.progressBar}>
                <div style={{}}>
                  <Progress striped color="success" value={this.state.offsetPercent} />
                </div>
              </div>
            </Col>
            <Col md={1}>
              <div className={styles.percent}>
                <p>{Math.floor(this.state.offsetPercent*(this.props.emissions+this.props.offset)/100)}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Progess;
