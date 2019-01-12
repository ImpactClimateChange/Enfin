import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from 'reactstrap';

import logo from '../images/mintlogo.png';
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
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            <img style={{ width: '120px' }} alt="drawchange logo" src={logo} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className={styles.navItem}>
                <NavLink href="http://www.drawchange.org">Home</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar className={styles.navItem}>
                <DropdownToggle nav>About Us</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem href="http://www.drawchange.org/faqs">FAQs</DropdownItem>
                  <DropdownItem href="http://www.drawchange.org/foundersstory">
                    Founder's Story
                  </DropdownItem>
                  <DropdownItem href="http://www.drawchange.org/curriculum-blueprint">
                    Curriculum & Blueprint
                  </DropdownItem>
                  <DropdownItem href="http://www.drawchange.org/friends-partners">
                    Our Friends & Partners
                  </DropdownItem>
                  <DropdownItem href="http://www.drawchange.org/store">Store</DropdownItem>
                  <DropdownItem href="http://www.drawchange.org/press-kit">
                    Press Kit
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className={styles.navItem}>
                <NavLink href="http://www.drawchange.org/blog">News</NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink href="http://www.drawchange.org/contactus">Contact</NavLink>
              </NavItem>
              <NavItem className={styles.navItem}>
                <NavLink href="https://secure.donationpay.org/drawchange/">Donate</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
