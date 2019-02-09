import React, { Component } from 'react';
import styles from '../../styles/Splash.module.css';
import CategoryRationale from './CategoryRationale';
import CharityRationale from './CharityRationale';

class Research extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryList: [],
      charityList: []
    };

    //get information about categories to display
    window
      .fetch('/categories')
      .then(response => response.json())
      .then(data => this.setState({ categoryList: data.categories, charityList: this.state.charityList }));
      
    //get information about charites to display
    window
      .fetch('/charities')
      .then(response => response.json())
      .then(data => this.setState({ charityList: data.charities, categoryList: this.state.categoryList }));
  }

  render() {
    return (
      <div className={styles.description}>
        <div className={styles.descriptionInner}>
          <div className={styles.descriptionBio}>
            <div>
              <h1 className={styles.green}>Methodology & Research</h1>
              <p className={styles.bio}>
                We believe that the world would be a better place if people have <em>convienent</em>{' '}
                access to a <em>trustworthy</em> and <em>accurate</em> analysis of their own carbon
                footprint. In order to provide analytics that we know users can be confident in, the
                team at enfin has undergone a rigorous and expert reviewed research process. Our
                code is open source, and our rationale for any economic and environmental
                calculations are completely transparent. If you are worried about accuracy, you've
                come to the right place.
              </p>
              <ul className={styles.bio}>
                <span className={styles.under}>Carbon Emission Calculation Sources</span>
                <li>
                  EPA eGRID{' '}
                  <a
                    className={styles.italic}
                    href="http://www.epa.gov/sites/production/files/2015-10/documents/egrid2012_summarytables_0.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Summary Tables
                  </a>{' '}
                  and{' '}
                  <a className={styles.italic} href="http://www.epa.gov/energy/egrid">
                    Data Files
                  </a>
                </li>
                <li>
                  <a
                    className={styles.italic}
                    href="https://www.eia.gov/environment/emissions/co2_vol_mass.cfm"
                  >
                    U.S. Department of Energy
                  </a>
                </li>
                <li>
                  <a
                    className={styles.italic}
                    href="http://www.eia.gov/dnav/ng/ng_cons_num_a_EPG0_VN3_Count_a.htm"
                  >
                    Energy Information Agency
                  </a>
                  ,{' '}
                  <a
                    className={styles.italic}
                    href="http://factfinder2.census.gov/faces/tableservices/jsf/pages/productview.xhtml?pid=DEC_10_DP_DPDP1&amp;prodType=table"
                  >
                    US Census Bureau
                  </a>
                </li>
                <li>
                  <a
                    className={styles.italic}
                    href="http://www.eia.doe.gov/oiaf/1605/coefficients.html"
                  >
                    US DOE 1605(b) Voluntary Reporting of Greenhouse Gases Program
                  </a>
                </li>
                <li>
                  <a
                    className={styles.italic}
                    href="http://www.eia.gov/petroleum/fueloilkerosene/pdf/foks.pdf"
                  >
                    DOE EIA Fuel Oil and Kerosene Sales 2014
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="CarbonCosts" className={styles.descriptionBio}>
            <h2>Carbon Costs Of Spending</h2>
            <p className={styles.researchQuestion}>
              How do we estimate your carbon emissions based on your spending history?
            </p>
            <div className={styles.bio}>
              <p>
                First, we seperate your spending into narrow categories. Each of our categories of
                spending has a well defined average rate of greenhouse gas emissions per dollar
                spent. Take the example of gasoline purchases. Knowing the average cost of gasoline,
                we can estimate how many gallons of gasoline you have purchased. Then, knowing the
                approximate amount of carbon emissions that would arise from burning one gallon of
                gasoline, we can estimate the emissions you have generated from your gasoline
                purchases.
              </p>
              <p>
                Gasoline is a simple example, but the same general procedure can be used for
                almost any spending category, provided that category is narrow enough. Below is listed our
                conversion rates and rationale for each supported spending category.
              </p>
              <div>
                {
                  this.state.categoryList.map(category => {
                    return <CategoryRationale
                      key={category.name}
                      id={category.name}
                      displayName={category.displayName}
                      conversionFunction={category.conversionFunction}
                      conversionRationale={category.conversionRationale}
                    />;
                  })
                }
              </div>
            </div>
          </div>
          <div id="OffsetRates" className={styles.descriptionBio}>
            <h2>Offset Charity Carbon Elimination Rates</h2>
            <p className={styles.researchQuestion}>
              How do we estimate the carbon elimination effectiveness for our approved carbon offset
              charities?
            </p>
            <div className={styles.bio}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <div>
                {
                  this.state.charityList.map(charity => {
                    return <CharityRationale
                      key={charity.name}
                      id={charity.name}
                      displayName={charity.name}
                      ratePerKg={charity.ratePerKg}
                      rateRationale={charity.rateRationale}
                    />;
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Research;
