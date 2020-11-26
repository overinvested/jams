import React, { Component } from "react";
import { Button } from "react-bootstrap";
import imgs from "../imgs/imgs";

class Product extends Component {
  state = {
    info: this.props.productInfo,
    singleDisplay: false,
  };

  /**
   * Handles the selection of a product.
   * Sets the state such that the product will follow special rendering based on it being selected.
   * Calls a function from the parent class to filter the product list.
   */
  handleSelect() {
    this.setState({ singleDisplay: true });
    this.props.onSelect(this.state.info.id);
  }

  /**
   * Handles the working of the back button.
   * Sets the state such that the product will follow normal rendering based on it no longer being selected.
   * Calls a function from the parent class to repopulate the product list.
   */
  handleBack() {
    this.setState({ singleDisplay: false });
    this.props.onBack();
  }

  handleAddToCart(info) {
    this.props.onAddToCart(info);
  }

  handleAddToWishList(info) {
    this.props.onAddToWishList(info);
  }

  render() {
    const info = this.state.info;
    if (!this.state.singleDisplay) {
      return (
        <tr onClick={() => this.handleSelect()}>
          <td>{info.name}</td>
          <td>{info.coreCount}</td>
          <td>{info.coreClock}</td>
          <td>{info.boostClock}</td>
          <td>${info.price}</td>
        </tr>
      );
    } else {
      return (
        <div>
          <Button onClick={() => this.handleBack()}>Back</Button>
          <div>
            <br />
            <br />
            <img src={imgs[info.id - 1]} alt={info.name} height="100px" />
            <br />
            <br />
            <p>{info.name}</p>
            <p>{info.coreCount}</p>
            <p>{info.coreClock}</p>
            <p>{info.boostClock}</p>
            <p>${info.price}</p>
            <Button onClick={() => this.handleAddToWishList(info)}>
              Add to Wishlist
            </Button>{" "}
            <Button onClick={() => this.handleAddToCart(info)}>
              Add to Cart
            </Button>
          </div>
        </div>
      );
    }
  }
}

export default Product;
