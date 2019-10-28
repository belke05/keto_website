import React, { useEffect, useState, useContext } from 'react'
import { Nav, Navbar, NavDropdown, Dropdown, NavItem } from 'react-bootstrap'
import keto_logo from '../../assets/images/keto_logo.png'
import { Link } from 'react-router-dom'
import { useUserValue } from '../contexts/UserContext'
import SocialLogin from './SocialLogin'
import Logout from './Logout'
import Login from './Login'

export default function MainNavBar(props) {
  const [{ user }, dispatch] = useUserValue()
  console.log(props, 'props')
  return (
    <div className="main-nav-wrapper">
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparent"
        variant="light"
        fixed="top"
        id="nav"
      >
        <Link to="/">
          <Navbar.Brand
            className="keto_logo"
            style={{
              backgroundImage: `url(${keto_logo})`,
            }}
          ></Navbar.Brand>
        </Link>
        <Nav.Link eventKey={2} href="#">
          <Link to="/">
            <b className="shop-name">Keto-Shop</b>
          </Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {user && (
              <Nav.Link>
                <Logout />
              </Nav.Link>
            )}
            <Nav.Link eventKey={2} href="#memes">
              <i class="fas fa-shopping-cart"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i class="fas fa-heart"></i>
            </Nav.Link>
            <Dropdown drop={'down'} alignRight={true}>
              <Dropdown.Toggle id="user-btn">
                <i className="fa fa-user" aria-hidden="true"></i>
              </Dropdown.Toggle>
              {!user && (
                <Dropdown.Menu>
                  <Login />
                  <Dropdown.Divider />
                  <SocialLogin></SocialLogin>
                  <Dropdown.Item style={{ textAlign: 'center' }}>
                    <Link to="/register-login">no account? sign-up here</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
              {user && (
                <Dropdown.Menu>
                  <Dropdown.Item style={{ textAlign: 'center' }}>
                    <Link to="/order-history">my orders</Link>
                  </Dropdown.Item>
                  <Dropdown.Item style={{ textAlign: 'center' }}>
                    <Link to="/register-login">account settings</Link>
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item style={{ textAlign: 'center' }}>
                    <Logout />
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
