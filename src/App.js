import React, { Component } from "react";
import NavBar from "./components/navbar";
import Body from "./components/body";
import "./App.css";
import Products from "./products.json";

const products = Products;

class App extends Component {
  state = {
    products: products.products,
    search: "",
  };

  render() {
    return (
      <React.Fragment>
        <NavBar onSort={this.handleSort} onSearch={this.handleSearch} />
        <Body productList={this.state.products} search={this.state.search} />
      </React.Fragment>
    );
  }

  handleSearch = (search) => {
    this.setState({ search });
  };

  handleSort = (sortMethod) => {
    var sortedProducts = products.products;
    if (sortMethod === "default") {
      sortedProducts.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        } else if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
      this.setState({ products: sortedProducts });
    } else if (sortMethod === "new") {
      sortedProducts.sort(function (a, b) {
        if (Date.parse(a.dateAdded) < Date.parse(b.dateAdded)) {
          return -1;
        } else if (Date.parse(a.dateAdded) > Date.parse(b.dateAdded)) {
          return 1;
        }
        return 0;
      });
      this.setState({ products: sortedProducts });
    } else if (sortMethod === "popular") {
      sortedProducts.sort(function (a, b) {
        if (a.purchases > b.purchases) {
          return -1;
        } else if (a.purchases > b.purchases) {
          return 1;
        }
        return 0;
      });
      this.setState({ products: sortedProducts });
    }
  };

  handleNavigation(props) {
    // based on what is clicked, send props to body
  }
}

export default App;
