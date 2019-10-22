import React, { useEffect } from 'react'
import user_management from '../../api/user-management'
import { Nav, Navbar, NavDropdown, Dropdown, NavItem } from 'react-bootstrap'

export default function MainNavBar() {
  useEffect(() => {
    return () => {
      cleanup
    }
  }, [input])
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown>
              <Dropdown.Toggle>
                <i className="fa fa-user" aria-hidden="true"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            ;
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
