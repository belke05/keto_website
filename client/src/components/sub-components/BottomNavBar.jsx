import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'

export default function BottomNavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="bottom" className="bottom-navbar">
      <Nav className="mr-auto">
        <Nav.Link href="#features">
          <div className="bottom-nav-icon-title">
            <i className="fas fa-drumstick-bite"></i>
            <span>Food</span>
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div className="bottom-nav-icon-title">
            <i className="fas fa-cocktail"></i>
            <span>Drinks</span>
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div className="bottom-nav-icon-title">
            <i className="fas fa-pills"></i>
            <span>Sups</span>
          </div>
        </Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  )
}
