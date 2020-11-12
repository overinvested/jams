import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

class NavBar extends Component {
  handleNavigation() {}

  render() {
    return (
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Button variant="link">Home</Button>
          <Button variant="link">New</Button>
          <Button variant="link">Popular</Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
