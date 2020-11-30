import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Table } from "react-bootstrap";

class WishList extends Component {
  /**
   * Elevates the parameter to the Body component
   * @param {Object} item an item to be removed from the wishlist
   */
  handleRemoveFromWishList(item) {
    this.props.onRemoveFromWishList(item);
  }

  /**
   * Renders the WishList component
   */
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
