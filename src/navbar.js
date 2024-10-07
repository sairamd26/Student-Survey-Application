import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'; 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Navigation() {
  return (

    <Navbar expand="lg" bg="dark" variant="dark">
   
        <Navbar.Brand href="/">Survey</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
            <LinkContainer to="/survey-form">
              <Nav.Link >Form</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/survey-list">
              <Nav.Link>List</Nav.Link>
            </LinkContainer>
          
          </Nav>
        </Navbar.Collapse>
   
    </Navbar>
  
  );
}

export default Navigation;
