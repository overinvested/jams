import React, { Component } from "react";
import ProductList from "./productlist";
import Cart from "./cart";
import WishList from "./wishlist";
import CheckOut from "./checkout";

class Body extends Component {
  /**
   * Elevates the parameter to the App component
   * @param {Object} item an item to be added to the cart
   */
  handleAddToCart = (item) => {
    this.props.onAddToCart(item);
  };

  /**
   * Elevates the parameter to the App component
   * @param {Object} item an item to be added to the wishlist
   */
  handleAddToWishList = (item) => {
    this.props.onAddToWishList(item);
  };

  /**
   * Elevates the parameter to the App component
   * @param {Object} item an item to be removed from the cart
   */
  handleRemoveFromCart = (item) => {
    this.props.onRemoveFromCart(item);
  };

  /**
   * Elevates the parameter to the App component
   * @param {Object} item an item to be removed from the wishlist
   */
  handleRemoveFromWishList = (item) => {
    this.props.onRemoveFromWishList(item);
  };

  /**
   * Elevates the parameter to the App component
   * @param {Object} componentToDisplay the component to be displayed in the body
   */
  handleNavigation = (componentToDisplay) => {
    this.props.onNavigation(componentToDisplay);
  };

  /**
   * Handles conditional rendering of different components (prod. list, cart, wish list, checkout)
   */
  render() {
    return (
      <main className="container">
        {this.props.componentToDisplay === "productList"
          ? this.renderProductList()
          : null}
        {this.props.componentToDisplay === "cart"
          ? this.renderCart(this.props.cart)
          : null}
        {this.props.componentToDisplay === "wishlist"
          ? this.renderWishList(this.props.wishlist)
          : null}
        {this.props.componentToDisplay === "checkout"
          ? this.renderCheckOut(this.props.cart)
          : null}
      </main>
    );
  }

  /**
   * Renders the current list of products
   * May be sorted based on navbar actions
   */
  renderProductList() {
    return (
      <ProductList
        products={this.props.productList}
        search={this.props.search}
        onAddToCart={this.handleAddToCart}
        onAddToWishList={this.handleAddToWishList}
      />
    );
  }

  /**
   * Renders the current cart
   * @param {Object[]} cart the current cart
   */
  renderCart(cart) {
    return (
      <Cart
        cart={cart}
        onRemoveFromCart={this.handleRemoveFromCart}
        onNavigation={this.handleNavigation}
      />
    );
  }

  /**
   * Renders the current wishlist
   * @param {Object[]} wishlist the current wishlist
   */
  renderWishList(wishlist) {
    return (
      <WishList
        wishlist={wishlist}
        onRemoveFromWishList={this.handleRemoveFromWishList}
      />
    );
  }

  /**
   * Renders the checkout component based on the current cart
   * @param {Object[]} cart the current cart
   */
  renderCheckOut(cart) {
    var isEmpty;
    Object.keys(cart).length === 0 ? (isEmpty = true) : (isEmpty = false);
    return (
      <CheckOut
        cart={cart}
        cartEmpty={isEmpty}
        onEmptyCart={this.props.onEmptyCart}
      />
    );
  }
}

export default Body;
