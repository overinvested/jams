import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";

class NavBar extends Component {
  /**
   * @param {string} sortMethod
   */
  handleSort = (sortMethod) => {
    this.props.onSort(sortMethod);
  };

  render() {
    return (
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <Button variant="link" onClick={() => this.handleSort("default")}>
            Home
          </Button>
          <Button variant="link" onClick={() => this.handleSort("new")}>
            New
          </Button>
          <Button variant="link" onClick={() => this.handleSort("popular")}>
            Popular
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
