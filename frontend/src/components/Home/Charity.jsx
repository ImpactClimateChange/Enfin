import React, { Component } from 'react';
import styles from '../../styles/Home.module.css';
import { Card, CardImg, CardText, CardBody,
  CardSubtitle, Button } from 'reactstrap';


class Charity extends Component {
  render() {
    return <div>
        <Card className={styles.charityCard}>
        <CardImg top style={ this.props.extraImagePadding ? { padding: '40px' } : {}} width="100%" src={this.props.image} alt={this.props.name} />
          <CardBody>
            <CardSubtitle className={styles.charityRate}>${this.props.ratePerKg} per kg CO2</CardSubtitle>
            <CardText>{this.props.blurb}</CardText>
            {/* Conditionally render error message and disable buttons */}
            { this.props.disabled ? (
              <div>
                <p>
                  <b>Donations to {this.props.name} cannot be accepted at this time.</b>
                </p>
                <a href={this.props.donateLink}>
                  <Button disabled={true}>Donate</Button>
                </a>
                <a href={this.props.infoLink}>
                  <Button disabled={true} outline color="primary">
                    Learn More
                      </Button>
                </a>
              </div>
              
            ) : (
                <div>
                  <a href={this.props.donateLink}>
                    <Button>Donate</Button>
                  </a>
                  <a href={this.props.infoLink}>
                    <Button outline color="primary">Learn More</Button>
                  </a>
                </div>
            )}
          </CardBody>
        </Card>
      </div>;
  }
}

export default Charity;
