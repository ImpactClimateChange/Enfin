import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import IMAGES from '../../images';

class Headshots extends Component {
  render() {
    return (
      <div>
        <h2>Meet the team</h2>
        <div className={styles.descriptionBio}>
          <p className={styles.bio}>
            The Enfin Team was incubated at the 2019{' '}
            <a className={styles.italic} href="https://www.impactlabs.io/fellowship">
              Impact Labs Fellowship
            </a>
            . This hackathon style event prompted fellows to create a technological solution to a
            social good problem. After recognizing our shared passion for climate change reversal and
            high quality software development, we quickly became loyal friends and
            efficient teammates.
          </p>
        </div>
        <div className={styles.flexBoxRowWrap}>
          <div className={styles.headshotAndBio}>
            <img src={IMAGES.abe} width="250px" height="250px" alt="Abe" />
            <h3>Abe Miller</h3>
            <p debug className={styles.bio}>
              Abe studies computer science and philosophy at University of Washington. 
              His prior work experience is in automating synthetic biology experiments. 
              He loves patting dogs, bicycling, and very hot tea.
            </p>
          </div>
          <div className={styles.headshotAndBio}>
            <img src={IMAGES.james} width="250px" height="250px" alt="James" />
            <h3>James Wang</h3>
            <p debug className={styles.bio}>
              James Wang is a student at Georgia Tech, and the Executive Director at GT Bits of Good. 
              He is experienced in product and web development. He enjoys photography, running, and traveling.
            </p>
          </div>
{/*          <div className={styles.headshotAndBio}>
            <img src={IMAGES.isabelle} width="250px" alt="Isabelle" />
            <h3>Isabelle De Brabanter</h3>
            <p debug className={styles.bio}>
              Isabelle is a senior studying Information/Data Science and French at Cornell
              University. She is currently working on a computational thesis about the French
              Revolution - read her blog{' '}
              <a className={styles.italic} href="https://id96.github.io">
                {' '}
                here!
              </a>{' '}
              Isabelle spends her free time reading, coding, and complaining about how cold Ithaca
              is.{' '}
            </p>
          </div>*/}
          {/*<div className={styles.headshotAndBio}>
            <img src={IMAGES.chris} width="250px" alt="Chris" />
            <h3>Chris Hays</h3>
            <p debug className={styles.bio}>
              Chris Hays is a junior studying Computer Science and Political Science at Yale. In his
              free time, he writes and edits for an on-campus creative nonfiction publication and
              works a progressive data analytics job. Chris loves reading (especially Jesmyn Ward
              and James Joyce) and exploring new cities (most recently Minneapolis and Chicago).
            </p>
          </div>*/}
        </div>
      </div>
    );
  }
}

export default Headshots;
