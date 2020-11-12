import React, { Component } from "react";
import NavBar from "./components/navbar";
import Body from "./components/body";
import "./App.css";
import Products from "./products.json";

const products = Products;

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Body productList={products.products} />
      </React.Fragment>
    );
  }

  handleNavigation(props) {
    // based on what is clicked, send props to body
  }
}

export default App;
