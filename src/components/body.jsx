import React, { Component } from "react";
import ProductList from "./productlist";
import Cart from "./cart";
import WishList from "./wishlist";
import Checkout from "./checkout";

class Body extends Component {
  state = {
    componentToDisplay: "",
  };

  render() {
    // handles conditional rendering of different components (prod. list, cart, wish list, checkout)
    return (
      <main className="container">
        <ProductList products={this.props.productList} />
      </main>
    );
  }

  renderProductList() {
    // renders the current list of products
    // may be sorted based on navbar actions
  }

  renderCart() {
    // renders the current cart
  }

  handleAddToCart(Product) {
    // handles adding an item to the cart
  }

  handleRemoveFromCart(Product) {
    // handles removing an item from the cart
  }

  renderWishList() {
    // renders the current wishlist
  }

  handleAddToWishList(Product) {
    // handles adding an item to the wish list
  }

  handleRemoveFromWishList(Product) {
    // handles removing an item from the wish list
  }

  renderCheckOut() {
    // renders the checkout component
  }
}

export default Body;
