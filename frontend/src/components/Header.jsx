import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/logo.png';
import styles from '../styles/Header.module.css';
import PlaidLink from 'react-plaid-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      redirect: false
    };
  }

  toggle = _ => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleOnSuccess = (token, metadata) => {
    this.props.onAuth(token);
  };

  handleOnExit(error, metadata) {
    console.log('link: user exited');
    console.log(error, metadata);
  };

  handleOnLoad() {
    console.log('link: loaded');
  };

  handleOnEvent(eventname, metadata) {
    console.log('link: user event', eventname, metadata);
  };
  
  render() {
    return (
      <div>
        <Navbar color="white" expand="md">
          <NavbarBrand tag={Link} to="/">
            <img style={{ width: '124px' }} alt="enfin logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={styles.navItem}>
                <NavLink tag={Link} to="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink tag={Link} to="/methodology">METHODOLOGY</NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                {this.props.user ? (
                  <Button outline color="primary" onClick={() => this.props.logout()}>
                    LOG OUT
                  </Button>
                ) : (
                  <PlaidLink
                    clientName="Plaid Client"
                    env="development"
                    product={['auth', 'transactions']}
                    publicKey="dc14e823249a9b78995fc65b53f0c6"
                    className="some-class-name"
                    apiVersion="v2"
                    onSuccess={this.handleOnSuccess}
                    onExit={this.handleOnExit}
                    onEvent={this.handleOnEvent}
                    onLoad={this.handleOnLoad}
                    style={{ border: '0px' }}
                  >
                    <Button outline color="primary">
                      SIGN IN
                    </Button>
                  </PlaidLink>
                )}
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
