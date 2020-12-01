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

  /**
   * Elevates the parameter to the ProductList component
   * @param {Object} item an item to be added to the cart
   */
  handleAddToCart(item) {
    this.props.onAddToCart(item);
  }

  /**
   * Elevates the parameter to the ProductList component
   * @param {Object} item an item to be added to the wishlist
   */
  handleAddToWishList(item) {
    this.props.onAddToWishList(item);
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
          <br />
          <Button onClick={() => this.handleBack()}>Back</Button>
          <div>
            <br />
            <br />
            <img src={imgs[info.id - 1]} alt={info.name} height="300px" />
            <br />
            <br />
            <h2>Product: {info.name}</h2>
            <br />
            <h3>Specifications</h3>
            <br />
            <p>
              <b>Core Count:</b> {info.coreCount}
            </p>
            <p>
              <b>Base Clock:</b> {info.coreClock}
            </p>
            <p>
              <b>Boost Clock:</b> {info.boostClock}
            </p>
            <p>
              <b>TDP:</b> {info.thermalDesignPower}
            </p>
            <p>
              <b>Multithreading:</b> {info.multithreading}
            </p>
            <p>
              <b>Socket:</b> {info.socket}
            </p>
            <p>
              <b>Integrated Graphics:</b> {info.integratedGraphics}
            </p>
            <p>
              <b>Maximum Supported Memory:</b> {info.maximumMemory}
            </p>
            <br />
            <h3>Price: ${info.price}</h3>
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
