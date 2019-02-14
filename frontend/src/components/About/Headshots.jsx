import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import IMAGES from '../../images';

class Headshots extends Component {
  render() {
    return (
      <div>
        <h2>Meet the team</h2>
        <p className={styles.bio}>
          The Enfin Team was incubated at the 2019{' '}
          <a className={styles.italic} href="https://www.impactlabs.io/fellowship">
            Impact Labs Fellowship
          </a>
          . This hackathon style event prompted fellows to create a technological solution to a
          social good problem. After recognizing our shared passion for climate change reversal and
          high quality software development, the four of us quickly became loyal friends and
          efficient teammates. Then, on the morning of {'<'}incorporation date{'>'} we became Enfin.
        </p>
        <br />
        <div className={styles.flexBoxRowWrap}>
          <div className={styles.headshotAndBio}>
            <img src={IMAGES.james} width="250px" alt="James" />
            <h3>James Wang</h3>
            <p debug className={styles.bio}>
              James Wang lives in the College of Computing and School of Math as a 2nd year at the
              Georgia Institute of Technology. While struggling through classes, he attempts to have
              an impact on his local community through student organizations and volunteering. If he
              had all the time in the world, he would still not get anything done, but he would try
              to do more photography, running, and traveling.
            </p>
          </div>
          <div className={styles.headshotAndBio}>
            <img src={IMAGES.abe} width="250px" alt="Abe" />
            <h3>Abe Miller</h3>
            <p debug className={styles.bio}>
              Abe studies computer science and philosophy at UW Seattle. When he's not writing
              software to help automate synthetic biology experimentation, you might find him
              creating fun javascript web toys, or ensuring that his essays have a healthy ratio of
              melodrama and humor. More than anything else in the world he loves patting dogs,
              bicycling, and very hot coffee.
            </p>
          </div>
          <div className={styles.headshotAndBio}>
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
          </div>
          <div className={styles.headshotAndBio}>
            <img src={IMAGES.chris} width="250px" alt="Chris" />
            <h3>Chris Hays</h3>
            <p debug className={styles.bio}>
              Chris Hays is a junior studying Computer Science and Political Science at Yale. In his
              free time, he writes and edits for an on-campus creative nonfiction publication and
              works a progressive data analytics job. Chris loves reading (especially Jesmyn Ward
              and James Joyce) and exploring new cities (most recently Minneapolis and Chicago).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Headshots;
