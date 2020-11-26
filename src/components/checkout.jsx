import React, { Component } from "react";
import {
  Form,
  FormControl,
  ListGroup,
  Card,
  FormLabel,
  Col,
  Button,
} from "react-bootstrap";
import Order from "./order";

class CheckOut extends Component {
  state = {
    submitted: false,
    cartEmpty: this.props.cartEmpty,
    name: "",
    email: "",
    card: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    emailError: "",
    cardError: "",
    cvvError: "",
    zipError: "",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = () => {
    const isValid = this.validate();
    if (isValid) {
      this.setState({ submitted: !this.state.submitted });
    }
  };

  validate = () => {
    var emailError = "";
    var cardError = "";
    var cvvError = "";
    var zipError = "";

    this.setState({ emailError });
    this.setState({ cardError });
    this.setState({ cvvError });
    this.setState({ zipError });

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (!(this.state.card.length === 16) || isNaN(parseInt(this.state.card))) {
      cardError = "Invalid Card Number";
    }

    if (!(this.state.cvv.length === 3) || isNaN(parseInt(this.state.cvv))) {
      cvvError = "Invalid CVV";
    }

    if (!(this.state.zip.length === 5) || isNaN(parseInt(this.state.zip))) {
      zipError = "Invalid Zip Code";
    }

    if (emailError) {
      this.setState({ emailError });
      return false;
    }

    if (cardError) {
      this.setState({ cardError });
      return false;
    }

    if (cvvError) {
      this.setState({ cvvError });
      return false;
    }

    if (zipError) {
      this.setState({ zipError });
      return false;
    }

    return true;
  };

  render() {
    const cart = this.props.cart;
    var total = 0;
    for (const key in cart) {
      if (cart.hasOwnProperty(key)) {
        total += cart[key].price * cart[key].quantityInCart;
      }
    }
    return (
      <div>
        <br />
        <br />
        <br />
        <h3>Cart</h3>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            {cart.map((item, i) => (
              <ListGroup.Item key={`item-${i}`}>
                {item.name} x{item.quantityInCart} $
                {item.price * item.quantityInCart}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
        ______________________________________
        <h3>Total: ${total}</h3>
        <br />
        <br />
        <br />
        <Form className="checkout">
          <FormLabel>Name: </FormLabel>
          <FormControl
            name="name"
            className="w-50"
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <FormLabel>Email Address: </FormLabel>
          <FormControl
            name="email"
            className="w-50"
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          />
          <p className="red">
            <i>{this.state.emailError}</i>
          </p>
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <FormLabel>Credit Card: </FormLabel>
              <FormControl
                name="card"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
              <p className="red">
                <i>{this.state.cardError}</i>
              </p>
            </Form.Group>
            <Form.Group as={Col}>
              <FormLabel>CVV: </FormLabel>
              <FormControl
                name="cvv"
                className="w-50"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
              <p className="red">
                <i>{this.state.cvvError}</i>
              </p>
            </Form.Group>
          </Form.Row>
          <FormLabel>Address: </FormLabel>
          <FormControl
            name="address"
            className="w-50"
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          />
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <FormLabel>City: </FormLabel>
              <FormControl
                name="city"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
            <Form.Group as={Col}>
              <FormLabel>State: </FormLabel>
              <FormControl
                name="state"
                className="w-50"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
            </Form.Group>
          </Form.Row>
          <FormLabel>Zip: </FormLabel>
          <FormControl
            name="zip"
            className="w-50"
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          />
          <p className="red">
            <i>{this.state.zipError}</i>
          </p>
          <br />
          <Button
            onClick={this.handleSubmit}
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          >
            Submit
          </Button>
        </Form>
        {this.state.submitted ? (
          <Order items={cart} userInfo={this.state} />
        ) : null}
      </div>
    );
  }
}

export default CheckOut;
