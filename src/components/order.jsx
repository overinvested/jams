import React, { Component } from "react";
import { Button } from "react-bootstrap";

class Order extends Component {
  state = {
    reciept: false,
  };

  /**
   * Renders the Order Component
   */
  render() {
    const userInfo = this.props.userInfo;
    const items = this.props.items;
    return (
      <div className="order">
        <h2>Thank you {userInfo.name} for your order!</h2>
        <h3>Your Order has Been Submitted.</h3>
        <h4>Confirmation ID: {this.generateConfirmationID()}</h4>
        <br />
        <h4>Items Ordered</h4>
        {items.map((item) => (
          <div className="reciept">
            <div className="fl-left">{item.name}</div>
            <div className="fl-right">${item.price * item.quantityInCart}</div>
            <div className="quantity">x{item.quantityInCart}</div>
          </div>
        ))}
        <div>__________________________________________</div>
        <div className="reciept">
          <h5 className="fl-left">Total:</h5>
          <div className="fl-right"> ${this.props.total}</div>
        </div>
        <br />
        <h5>Billing {"&"} Shipping Info</h5>
        <text>
          {userInfo.name}
          <br />
          {userInfo.email}
          <br />
          Card ending in: {this.getCensoredCard(userInfo.card)}
          <br />
          {userInfo.address}
          <br />
          {userInfo.city}, {userInfo.state}
          <br />
          {userInfo.zip}
        </text>
      </div>
    );
  }

  /**
   * Generates a random confirmation ID
   * @returns the randomized confirmation ID
   */
  generateConfirmationID() {
    var result = "";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * "Censors" the card for display
   * @param {string} card the card number entered by the user
   * @returns the last 4 digits of the card
   */
  getCensoredCard(card) {
    var result = card.substr(card.length - 4, 4);
    return result;
  }
}

export default Order;
