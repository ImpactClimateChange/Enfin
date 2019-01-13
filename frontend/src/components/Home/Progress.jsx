import React, { Component } from 'react';
import { Line, Circle } from 'rc-progress';
// import Flexbox from 'flexbox-react';
import styles from '../../styles/Home.module.css';

class Progess extends Component {
  constructor() {
    super();
    this.state = {
      percent: 0,
      color: 'red'
    };
    this.increase = this.increase.bind(this);
  }

  componentDidMount() {
    this.increase();
  }

  increase() {
    const percent = this.state.percent + 1;
    if (percent >= 61) {
      clearTimeout(this.tm);
      return;
    }
    this.setState({ percent });
    this.tm = setTimeout(this.increase, 10);
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <div className={styles.progressBar}>
          <Line style={{width: "95%", float: "left"}} percent={this.state.percent} trailWidth="0" strokeWidth="1.5" strokeColor={this.state.color} />
          <p style={{float:"right", display: "absolute", width:`${this.state.percent}%`, }}>{this.state.percent}</p>
        </div>
        <Line strokeWidth="1.5" trailWidth="0" percent={this.state.percent} />
      </div>
    );
  }
}

export default Progess;
