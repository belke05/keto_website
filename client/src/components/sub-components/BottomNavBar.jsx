import React from 'react'
import { Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function BottomNavBar() {
  return (
    <Navbar bg="light" variant="light" fixed="bottom" className="bottom-navbar">
      <Nav className="mr-auto">
        <Nav.Link href="#features">
          <div className="bottom-nav-icon-title">
            <Link to="/food">
              <i className="fas fa-drumstick-bite"></i>
              <span>Food</span>
            </Link>
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div className="bottom-nav-icon-title">
            <Link to="/drinks">
              <i className="fas fa-cocktail"></i>
              <span>Drinks</span>
            </Link>
          </div>
        </Nav.Link>
        <Nav.Link href="#pricing">
          <div className="bottom-nav-icon-title">
            <Link to="/sups">
              <i className="fas fa-pills"></i>
              <span>Sups</span>
            </Link>
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
