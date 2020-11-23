import React, { Component } from "react";
import ProductList from "./productlist";
import Cart from "./cart";
import WishList from "./wishlist";
import Checkout from "./checkout";

class Body extends Component {
  state = {};

  handleAddToCart = (info) => {
    this.props.onAddToCart(info);
  };

  handleAddToWishList = (info) => {
    this.props.onAddToWishList(info);
  };

  handleRemoveFromCart = (info) => {
    this.props.onRemoveFromCart(info);
  };

  handleRemoveFromWishList = (info) => {
    this.props.onRemoveFromWishList(info);
  };

  render() {
    // handles conditional rendering of different components (prod. list, cart, wish list, checkout)
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

  renderProductList() {
    // renders the current list of products
    // may be sorted based on navbar actions
    return (
      <ProductList
        products={this.props.productList}
        search={this.props.search}
        onAddToCart={this.handleAddToCart}
        onAddToWishList={this.handleAddToWishList}
      />
    );
  }

  renderCart(cart) {
    // renders the current
    return <Cart cart={cart} onRemoveFromCart={this.handleRemoveFromCart} />;
  }

  renderWishList(wishlist) {
    // renders the current wishlist
    return (
      <WishList
        wishlist={wishlist}
        onRemoveFromWishList={this.handleRemoveFromWishList}
      />
    );
  }

  renderCheckOut(cart) {
    // renders the checkout component
  }
}

export default Body;
