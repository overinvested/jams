import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

class Cart extends Component {
  state = {
    cart: [],
  };

  handleRemoveFromCart(info) {
    this.props.onRemoveFromCart(info);
  }

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
