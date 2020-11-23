import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

class WishList extends Component {
  state = {
    wishlist: [],
  };

  handleRemoveFromWishList(info) {
    this.props.onRemoveFromWishList(info);
  }

  render() {
    const wishlist = this.props.wishlist;
    return (
      <div>
        <h1>Your Wishlist</h1>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((product, i) => (
              <tr key={i}>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => this.handleRemoveFromWishList(product)}
                  >
                    Remove
                  </Button>
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default WishList;
