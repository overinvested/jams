import React, { Component } from "react";
import Product from "./product";
import { Table } from "react-bootstrap";

class ProductList extends Component {
  state = {
    visible: true,
    products: this.props.products,
    singleDisplay: false,
  };

  /**
   * Handles the selection of a product.
   * Filters the product list such that only the selected product is rendered.
   * @param {string} productId is the id of the product which has been selected.
   */

  handleSelect = (productId) => {
    const products = this.state.products.filter((p) => p.id === productId);
    this.setState({ products });
    this.setState({ singleDisplay: true });
  };

  /**
   * Handles the working of the back button.
   * Sets the state such that the product list will be repopulated.
   */
  handleBack = () => {
    this.setState({ products: this.props.products });
    this.setState({ singleDisplay: false });
  };

  /**
   * Elevates the parameter to the Body component
   * @param {Object} item an item to be added to the cart
   */
  handleAddToCart = (item) => {
    this.props.onAddToCart(item);
  };

  /**
   * Elevates the parameter to the Body component
   * @param {Object} item an item to be added to the wishlist
   */
  handleAddToWishList = (item) => {
    this.props.onAddToWishList(item);
  };

  /**
   * Renders the ProductList component
   */
  render() {
    var filteredProducts = this.state.products.filter((product) => {
      return (
        product.name.toLowerCase().indexOf(this.props.search.toLowerCase()) !==
        -1
      );
    });
    if (this.state.visible) {
      return (
        <div>
          <Table>
            {!this.state.singleDisplay ? (
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Core Count</th>
                  <th>Base Clock</th>
                  <th>Boost Clock</th>
                  <th>Price</th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {filteredProducts.map((product) => (
                <Product
                  key={product.id}
                  productInfo={product}
                  onSelect={this.handleSelect}
                  onBack={this.handleBack}
                  onAddToCart={this.handleAddToCart}
                  onAddToWishList={this.handleAddToWishList}
                ></Product>
              ))}
            </tbody>
          </Table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ProductList;
