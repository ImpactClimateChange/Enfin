import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Charity extends Component {
  render() {
    if (this.props.info.name === "Enfin") { //special case. This is wrong, better to just pass the component a class name as a property
      return <div>
          <Card className={styles.charityCard}>
            <CardImg top style={{ padding: '40px' }} src={this.props.info.image} alt={this.props.info.name} />
            <CardBody>
              {/* <CardTitle>{this.props.info.name}</CardTitle> */}
              <CardSubtitle className={styles.charityRate}>
                ${this.props.info.ratePerKg} per kg CO2
              </CardSubtitle>
              <CardText>{this.props.info.blurb}</CardText>
              <p>
                <b>Donations to enfin cannot be accepted at this time.</b>
              </p>
              <a href={this.props.info.donateLink}>
                <Button disabled={true}>Donate</Button>
              </a>
              <a href={this.props.info.infoLink}>
                <Button disabled={true} outline color="primary">
                  Learn More
                </Button>
              </a>
            </CardBody>
          </Card>
        </div>;
    } else {
      return <div>
          <Card className={styles.charityCard}>
            <CardImg top width="100%" src={this.props.info.image} alt={this.props.info.name} />
            <CardBody>
              {/* <CardTitle>{this.props.info.name}</CardTitle> */}
              <CardSubtitle className={styles.charityRate}>${this.props.info.ratePerKg} per kg CO2</CardSubtitle>
              <CardText>{this.props.info.blurb}</CardText>
              <a href={this.props.info.donateLink}>
              <Button>Donate</Button>
              </a>
              <a href={this.props.info.infoLink}>
              <Button outline color="primary">Learn More</Button>
              </a>
            </CardBody>
          </Card>
        </div>;
    }
  }
}

export default Charity;
