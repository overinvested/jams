import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

class Cart extends Component {
  /**
   * Elevates the parameter to the Body component
   * @param {Object} item an item to be removed from the cart
   */
  handleRemoveFromCart(item) {
    this.props.onRemoveFromCart(item);
  }

  /**
   * Renders the cart component
   */
  render() {
    const cart = this.props.cart;
    return (
      <div>
        <h1>Your Cart</h1>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product, i) => (
              <tr key={i}>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.handleRemoveFromCart(product)}
                  >
                    Remove
                  </Button>
                </td>
                <td>{product.name}</td>
                <td>{product.quantityInCart}</td>
                <td>${product.price * product.quantityInCart}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button onClick={() => this.props.onNavigation("checkout")}>
          Checkout
        </Button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Cart;
