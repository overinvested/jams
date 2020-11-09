import React, { Component } from "react";

class NavBar extends Component {
  handleNavigation() {}

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" href="">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#">
              New
            </a>
            <a className="nav-link" href="#">
              Popular
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
