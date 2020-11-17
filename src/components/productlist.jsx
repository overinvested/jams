import React, { Component } from "react";
import Product from "./product";
import SearchBar from "./searchbar";

class ProductList extends Component {
  state = {
    visible: true,
    products: this.props.products,
  };

  /**
   * Handles the selection of a product.
   * Filters the product list such that only the selected product is rendered.
   * @param {string} productId is the id of the product which has been selected.
   */

  handleSelect = (productId) => {
    const products = this.state.products.filter((p) => p.id === productId);
    this.setState({ products });
  };

  /**
   * Handles the working of the back button.
   * Sets the state such that the product list will be repopulated.
   */
  handleBack = () => {
    this.setState({ products: this.props.products });
  };

  render() {
    if (this.state.visible) {
      return (
        <div>
          {this.state.products.map((product) => (
            <Product
              key={product.id}
              productInfo={product}
              onSelect={this.handleSelect}
              onBack={this.handleBack}
            ></Product>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  renderSearchBar() {
    // renders the search bar
  }

  handleSearch() {
    // handles filtering of the list based on a search query
  }
}

export default ProductList;
