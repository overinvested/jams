import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import logo from "../logo.svg";

class NavBar extends Component {
  state = {
    search: "",
  };

  /**
   * @param {string} sortMethod
   */
  handleSort = (sortMethod) => {
    this.props.onSort(sortMethod);
    this.props.onNavigation("productList");
  };

  updateSearch = (event) => {
    var target = event.target.value.substr(0, 20);
    this.setState({ search: target });
    this.props.onSearch(target);
  };

  render() {
    return (
      <Navbar bg="light" variant="light">
        <Nav className="mr-auto">
          <img src={logo} alt="logo" height="50px" width="150px"></img>
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
        <Nav>
          <Button
            variant="link"
            onClick={() => this.props.onNavigation("wishlist")}
          >
            Wishlist
          </Button>
          <Button
            variant="link"
            onClick={() => this.props.onNavigation("cart")}
          >
            Cart
          </Button>
        </Nav>{" "}
        <Form inline>
          <FormControl
            type="text"
            value={this.state.search}
            onChange={this.updateSearch}
            placeholder="Search"
            className="mr-sm-2"
          />
        </Form>
      </Navbar>
    );
  }
}

export default NavBar;
