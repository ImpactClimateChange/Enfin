import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';

class Mission extends Component {
  render() {
    return (
      <div>
        <div className={styles.descriptionBio}>
          <h2>Our Mission</h2>
          <p className={styles.bio}>
            Starting out, we knew we wanted to apply technology to the issue of climate change.
            Early in our research process we made some stark realizations:
          </p>
          <p className={styles.bio}>
            <ul>
              <li>
                <em>
                  All significant man-made greenhouse gas emissions can be causally traced back to
                  economic demand created by end consumers. {'<'}citation needed{'>'}
                </em>{' '}
              </li>
              <li>
                <em>
                  Unimpoversished people in developed countries are the biggest economic consumers{' '}
                  {'<'}citation needed{'>'}, and thus indirectly cause the most greenhouse gas
                  emissions.{' '}
                </em>
              </li>
              <li>
                <em>
                  People from this demographic are somewhat likely to care about their personal
                  environmental impact.
                </em>
              </li>
              <li>
                <em>
                  People from this demographic are unlikely to understand what decisions they make
                  on a day to day basis most significantly contribute to their carbon footprint.
                </em>
                {'<'}citation needed: facts about environmental red herrings reusable grocery store
                bags, organic food, gmos
                {'>'}
              </li>
            </ul>
            This gap between concern and knowledge with regard to individual environmental impact
            must be filled if climate change is going to be stopped.{' '}
            <b>
              We at Enfin have taken it as our mission to add potency to the decision-making of
              environmentally conscious consumers.
            </b>{' '}
            By providing people with an actionable understanding of their personal carbon footprint,
            we make it convienent and straightforward to bridge the gap between wanting to become
            carbon neutral, and verifiably achieving that goal.
          </p>
        </div>
      </div>
    );
  }
}

export default Mission;
