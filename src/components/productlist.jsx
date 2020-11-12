import React, { Component } from "react";
import Product from "./product";
import SearchBar from "./searchbar";

class ProductList extends Component {
  state = {
    visible: true,
    products: this.props.products,
  };

  render() {
    return (
      <div>
        {this.state.products.map((product) => (
          <div key={product.id}>
            <div>{product.name}</div>
          </div>
        ))}
      </div>
    );
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
