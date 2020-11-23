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

  handleNavigation = (componentToDisplay) => {
    // based on what is clicked, send props to body
    this.setState({ componentToDisplay });
  };

  handleAddToCart = (item) => {
    item.quantityInCart++;
    if (!this.state.cart.includes(item)) {
      const cart = this.state.cart.concat(item);
      this.setState({ cart });
    }
  };

  handleAddToWishList = (item) => {
    const wishlist = this.state.wishlist.concat(item);
    this.setState({ wishlist });
  };

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

  handleRemoveFromWishList = (item) => {
    const wishlist = this.state.wishlist.filter((i) => i.id !== item.id);
    this.setState({ wishlist });
  };

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
        />
      </React.Fragment>
    );
  }
}

export default App;
