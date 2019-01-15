import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';

class Research extends Component {
  render() {
    return (
      <div className={styles.description}>
        <div className={styles.descriptionBio}>
          <h1 className={styles.italic}>
            <span>enfin</span>: <span className={styles.green}>environmental finance</span>
          </h1>
          <br />
          <h2>Methodology & Research</h2>
          <p className={styles.bio}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
          <ul className={styles.bio}><span className={styles.under}>Carbon Emission Calculation Sources</span>
              <li>EPA eGRID <a className={styles.italic} href="http://www.epa.gov/sites/production/files/2015-10/documents/egrid2012_summarytables_0.pdf" target="_blank" rel="noopener noreferrer">Summary Tables</a> and <a className={styles.italic} href="http://www.epa.gov/energy/egrid">Data Files</a></li>
              <li><a className={styles.italic} href="https://www.eia.gov/environment/emissions/co2_vol_mass.cfm">U.S. Department of Energy</a></li>
              <li><a className={styles.italic} href="http://www.eia.gov/dnav/ng/ng_cons_num_a_EPG0_VN3_Count_a.htm">Energy Information Agency</a>, <a className={styles.italic} href="http://factfinder2.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=DEC_10_DP_DPDP1&amp;prodType=table">US Census Bureau</a></li>
              <li><a className={styles.italic} href="http://www.eia.doe.gov/oiaf/1605/coefficients.html">US DOE 1605(b) Voluntary Reporting of Greenhouse Gases Program</a></li>
              <li><a className={styles.italic} href="http://www.eia.gov/petroleum/fueloilkerosene/pdf/foks.pdf">DOE EIA Fuel Oil and Kerosene Sales 2014</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Research;
