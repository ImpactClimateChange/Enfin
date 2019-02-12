import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import { Container, Row, Col } from 'reactstrap';
import IMAGES from '../../images';

class Headshots extends Component {
  render() {
    return (
      <div>
        <h2>Meet the team</h2>
        <Container fluid style={{ lineHeight: '32px' }}>
          <Row debug>
            <Col debug>
              <img src={IMAGES.james} width="250px" alt="James" />
            </Col>
            <Col debug>
              <img src={IMAGES.abe} width="250px" alt="Abe" />
            </Col>
            <Col debug>
              <img src={IMAGES.isabelle} width="250px" alt="Isabelle" />
            </Col>
            <Col debug>
              <img src={IMAGES.chris} width="250px" alt="Chris" />
            </Col>
          </Row>
          <br />
          <Row debug>
            <Col debug>James Wang</Col>
            <Col debug>Abe Miller</Col>
            <Col debug>Isabelle De Brabanter</Col>
            <Col debug>Chris Hays</Col>
          </Row>
          <br />
          <Row debug>
            <Col debug className={styles.bio}>
              James Wang lives in the College of Computing and School of Math as a 2nd year at the
              Georgia Institute of Technology. While struggling through classes, he attempts to have
              an impact on his local community through student organizations and volunteering. If he
              had all the time in the world, he would still not get anything done, but he would try
              to do more photography, running, and traveling.
            </Col>
            <Col debug className={styles.bio}>
              Abe Miller studies computer science and philosophy at UW Seattle. He is passionate
              about both his own self-growth, and about leveraging the power of modern computing to
              make a positive impact on society. More than anything else in the world he loves
              coffee, patting dogs, and bicycling.
            </Col>
            <Col debug className={styles.bio}>
              Isabelle is a senior studying Information/Data Science and French at Cornell
              University. She is currently working on a computational thesis about the French
              Revolution - read her blog{' '}
              <a className={styles.italic} href="https://id96.github.io">
                {' '}
                here!
              </a>{' '}
              Isabelle spends her free time reading, coding, and complaining about how cold Ithaca
              is.{' '}
            </Col>
            <Col debug className={styles.bio}>
              Chris Hays is a junior studying Computer Science and Political Science at Yale. In his
              free time, he writes and edits for an on-campus creative nonfiction publication and
              works a progressive data analytics job. Chris loves reading (especially Jesmyn Ward
              and James Joyce) and exploring new cities (most recently Minneapolis and Chicago).
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Headshots;
