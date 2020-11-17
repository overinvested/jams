import React, { Component } from "react";
import { Button } from "react-bootstrap";

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

  render() {
    const info = this.state.info;
    if (!this.state.singleDisplay) {
      return (
        <div onClick={() => this.handleSelect()}>
          {info.name} {info.coreCount} {info.coreClock} {info.boostClock}{" "}
          {info.price}
        </div>
      );
    } else {
      return (
        <div className="singleDisplay">
          <Button onClick={() => this.handleBack()}>Back</Button>
          <div>
            {info.img} {info.name} {info.coreCount} {info.coreClock}{" "}
            {info.boostClock} {info.price}
          </div>
        </div>
      );
    }
  }
}

export default Product;
