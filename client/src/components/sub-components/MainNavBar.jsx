import React, { useEffect, useState } from 'react'
import user_management from '../../api/user-management'
import { Nav, Navbar, NavDropdown, Dropdown, NavItem } from 'react-bootstrap'
import keto_logo from '../../assets/images/keto_logo.png'
import { Link } from 'react-router-dom'
import SocialLogin from './SocialLogin'
import Logout from './Logout'
import Login from './Login'

export default function MainNavBar(props) {
  const [loginCheck, setLoginCheck] = useState(false)
  useEffect(() => {
    setLoginCheck(user_management.isLoggedIn())
  })
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="transparant"
        variant="light"
        fixed="top"
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
          <Link to="/">Keto-Shop</Link>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Logout />
            </Nav.Link>
            <Dropdown drop="left">
              <Dropdown.Toggle>
                <i className="fa fa-user" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Login />

                <Dropdown.Divider />

                <SocialLogin></SocialLogin>

                <Dropdown.Item style={{ textAlign: 'center' }}>
                  <Link to="/register-login">no account? sign-up here</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link eventKey={2} href="#memes">
              <i class="fas fa-shopping-cart"></i>
            </Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              <i class="fas fa-heart"></i>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}
