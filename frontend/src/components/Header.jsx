import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import logo from '../images/logo.png';
import styles from '../styles/Header.module.css';

class Header extends Component {
  state = {
    isOpen: false
  };

  toggle = _ => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
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
              <NavItem className={styles.navItem}>
                <Button outline color="primary" href="/home">
                  SIGN IN
                </Button>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
