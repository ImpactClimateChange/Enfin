import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import IMAGES from '../../images';
import Flexbox from 'flexbox-react';
import Charity from './Charity'
import images from '../../images';

const CHARITIES = [
  {
    name: "Cool Earth", image: IMAGES.coolEarth, ratePerKg: 0.00134, reference: "", 
    blurb: "Cool Earth is perhaps the most effective carbon offset charity. Their mission is to economically empower rural amazonian communities, relieving pressure to sell their forest land to loggers. They have a proven track-record of preventing amazonian deforestation.",
    donateLink: "", infoLink: ""
  },
  {
    name: "Vegan Outreach", image: IMAGES.veganOutreach, ratePerKg: 0.00691, reference: "", 
    blurb: "Eating a vegan diet is not only humane, it is one of the best ways to reduce carbon emissions. Vegan Outreach runs the longest running and most successful leafletting program for introducing people to a vegan diet.",
    donateLink: "", infoLink: ""
  },
  {
    name: "Solar Aid", image: IMAGES.solarAid, ratePerKg: 0.0100, reference: "", 
    blurb: "Burning kerosene is not only polluting, it is also toxic and expensive. Solar Aid provides impoverished communities in Malawi, Uganda and Zambia with reliable solar-powered lights to replace the use of kerosene lamps.",
    donateLink: "", infoLink: ""
  },
  {
    name: "Enfin", image: images.enfin, ratePerKg: 1.00, reference: "", 
    blurb: "Since our project is somewhat indirect, it's difficult to accurately calculate the offset efficiency. We humbly estimate to be 100x less effective than the next best option. Enfin uses your donations to maintain and improve the Enfin service. Our mission is to encourage people in the developed world to understand their carbon footprint, and then act on it.",
    donateLink: "", infoLink: ""
  },
]

class OffsetModal extends Component {
  render() {
    return (
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Offset Your Emissions</h2>
        <p className={styles.centerNoFlex}>
          Compensate for the emissions you've generated by donating to a charity that
          actively eliminates CO2 emissions from the atmosphere.
        </p>
        <Flexbox className={styles.center}>
          {
            CHARITIES.map((charInfo) => {
              return <Charity info={charInfo} />;
            })
          }
        </Flexbox>
      </div>
    );
  }
}

export default OffsetModal;
