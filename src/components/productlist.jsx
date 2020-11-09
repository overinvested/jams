import React, { Component } from "react";
import Product from "./product";
import SearchBar from "./searchbar";

class ProductList extends Component {
  state = {
    products: [
      // filled by fillProductList()
    ],
  };

  render() {
    // map product array to product component
    return;
  }

  renderSearchBar() {
    // renders the search bar
  }

  handleSearch() {
    // handles filtering of the list based on a search query
  }

  renderProduct() {
    // renders a given product
  }
}

export default ProductList;
