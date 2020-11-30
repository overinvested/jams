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
    cart: [],
    wishlist: [],
    componentToDisplay: "productList",
  };

  /**
   * Stores parameter search in the state for passing to body
   * @param {string} search the string to be searched for
   */
  handleSearch = (search) => {
    this.setState({ search });
  };

  /**
   * Handles sorting of product list based on parameter
   * @param {string} sortMethod the method by which the product list should be sorted
   */
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

  /**
   * Stores parameter componentToDisplay in state for passing to body
   * @param {string} componentToDisplay the component that should be displayed in the body
   */
  handleNavigation = (componentToDisplay) => {
    this.setState({ componentToDisplay });
  };

  /**
   * Handles addition of an item into cart
   * If the object 'item' is already in the cart, it will not add a new record, only increment the quantity
   * @param {Object} item an item to be added to the cart
   */
  handleAddToCart = (item) => {
    item.quantityInCart++;
    if (!this.state.cart.includes(item)) {
      const cart = this.state.cart.concat(item);
      this.setState({ cart });
    }
  };

  /**
   * Handles the addition of an item into the wishlist
   * If the object 'item' is already in the wishlist, it will not add a new record
   * @param {Object} item an item to be added to the wishlist
   */
  handleAddToWishList = (item) => {
    if (!this.state.wishlist.includes(item)) {
      const wishlist = this.state.wishlist.concat(item);
      this.setState({ wishlist });
    }
  };

  /**
   * Handles the removal of an item from the cart
   * The record for the item will only be removed if the quantity in cart reaches 0
   * Otherwise, the quantity will be reduced by 1
   * @param {Object} item an item to be removed from the cart
   */
  handleRemoveFromCart = (item) => {
    var cart = this.state.cart;
    if (item.quantityInCart > 0) {
      item.quantityInCart--;
      this.setState({ cart });
    }
    if (item.quantityInCart === 0) {
      cart = this.state.cart.filter((i) => i.id !== item.id);
      this.setState({ cart });
    }
  };

  /**
   * Handles the removal of an item form the wishlist
   * @param {Object} item an item to be removed from the wishlist
   */
  handleRemoveFromWishList = (item) => {
    const wishlist = this.state.wishlist.filter((i) => i.id !== item.id);
    this.setState({ wishlist });
  };

  /**
   * Handles the emptying of the cart
   */
  handleEmptyCart = () => {
    const cart = [];
    this.setState({ cart });
  };

  /**
   * Renders the app component
   */
  render() {
    return (
      <React.Fragment>
        <NavBar
          onSort={this.handleSort}
          onSearch={this.handleSearch}
          onNavigation={this.handleNavigation}
        />
        <Body
          componentToDisplay={this.state.componentToDisplay}
          productList={this.state.products}
          search={this.state.search}
          cart={this.state.cart}
          wishlist={this.state.wishlist}
          onAddToCart={this.handleAddToCart}
          onAddToWishList={this.handleAddToWishList}
          onRemoveFromCart={this.handleRemoveFromCart}
          onRemoveFromWishList={this.handleRemoveFromWishList}
          onNavigation={this.handleNavigation}
          onEmptyCart={this.handleEmptyCart}
        />
      </React.Fragment>
    );
  }
}

export default App;
