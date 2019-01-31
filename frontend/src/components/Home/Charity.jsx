import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class Charity extends Component {
  render() {
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

export default Charity;
