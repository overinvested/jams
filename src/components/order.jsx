import React, { Component } from "react";

class Order extends Component {
  state = {
    items: [],
  };

  render() {
    const userInfo = this.props.userInfo;
    return (
      <div className="order">
        <h2>Thank you {userInfo.name} for your order!</h2>
        <h3>Your Order has Been Submitted.</h3>
        <h4>Confirmation ID: {this.generateConfirmationID()}</h4>
        <br />
        <h5>Billing {"&"} Shipping Info</h5>
        <text>
          {userInfo.name}
          <br />
          {userInfo.email}
          <br />
          Card ending in {this.getCensoredCard(userInfo.card)}
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

  generateConfirmationID() {
    var result = "";
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  getCensoredCard(card) {
    var result = "******" + card.substr(card.length - 4, 4);
    return result;
  }
}

export default Order;
