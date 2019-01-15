import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import logo from '../images/logo.png';
import styles from '../styles/Header.module.css';
import Popup from 'reactjs-popup';
import Signin from './Signin';
import PlaidLink from 'react-plaid-link';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      redirect: false
    };
    // this.setRedirect = this.setRedirect.bind(this)
    // this.handleOnSuccess = this.handleOnSuccess.bind(this)
  }

  toggle = _ => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleOnSuccess = (token, metadata) => {
    // console.log(this.props.children);
    this.props.onAuth();
  };
  handleOnExit(error, metadata) {
    console.log('link: user exited');
    console.log(error, metadata);
  }
  handleOnLoad() {
    console.log('link: loaded');
  }
  handleOnEvent(eventname, metadata) {
    console.log('link: user event', eventname, metadata);
  }

  // setRedirect = () => {
  //   this.setState({
  //     redirect: true
  //   });
  // };

  // renderRedirect = () => {
  //   if (this.state.redirect) {
  //     return <Redirect exact to="/home" />;
  //   }
  // };

  render() {
    console.log(this.props);
    return (
      <div>
        <Navbar color="white" expand="md">
          <NavbarBrand tag={Link} to="/">
            <img style={{ width: '124px' }} alt="drawchange logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={styles.navItem}>
                <NavLink href="/about">ABOUT</NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink href="index.js">RESEARCH</NavLink>
              </NavItem>
              <NavItem className={styles.navItem} onClick={this.props.displayPopup}>
                {/* <Popup
                  modal
                  closeOnDocumentClick
                  trigger={
                    <PlaidLink
                      clientName="Plaid Client"
                      env="sandbox"
                      product={['auth', 'transactions']}
                      publicKey="614be98f819e9bd8d0db9abec1c08a"
                      className="some-class-name"
                      apiVersion="v2"
                      onSuccess={this.handleOnSuccess}
                      onExit={this.handleOnExit}
                      onEvent={this.handleOnEvent}
                      onLoad={this.handleOnLoad}
                    >
                      <Button outline color="primary" onClick={this.props.displayPopup}>
                        SIGN IN
                      </Button>
                    </PlaidLink>
                  }
                  position="right center"
                >
                  <form id="plaid-link-form" />
                </Popup> */}
                <PlaidLink
                  clientName="Plaid Client"
                  env="sandbox"
                  product={['auth', 'transactions']}
                  publicKey="614be98f819e9bd8d0db9abec1c08a"
                  className="some-class-name"
                  apiVersion="v2"
                  onSuccess={this.handleOnSuccess}
                  onExit={this.handleOnExit}
                  onEvent={this.handleOnEvent}
                  onLoad={this.handleOnLoad}
                  style={{ border: '0px' }}
                >
                  <Button outline color="primary" onClick={this.props.displayPopup}>
                    SIGN IN
                  </Button>
                </PlaidLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
