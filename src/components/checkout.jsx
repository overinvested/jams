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
    cart: {},
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
    nameError: "",
    emailError: "",
    cardError: "",
    cvvError: "",
    addressError: "",
    cityError: "",
    stateError: "",
    zipError: "",
  };

  /**
   * Handles updating of the forms
   * @param {Event} e the event of typing in a field
   */
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  /**
   * Handles submission of the form
   */
  handleSubmit = (cart) => {
    const isValid = this.validate();
    if (isValid) {
      this.setState({ cart });
      this.setState({ submitted: !this.state.submitted });
      this.props.onEmptyCart();
    }
  };

  /**
   * Handles form validation
   */
  validate = () => {
    var nameError = "";
    var emailError = "";
    var cardError = "";
    var cvvError = "";
    var addressError = "";
    var cityError = "";
    var stateError = "";
    var zipError = "";

    this.setState({ nameError });
    this.setState({ emailError });
    this.setState({ cardError });
    this.setState({ cvvError });
    this.setState({ addressError });
    this.setState({ cityError });
    this.setState({ stateError });
    this.setState({ zipError });

    if (this.state.name === "") {
      nameError = "Invalid Name";
    }

    if (!this.state.email.includes("@")) {
      emailError = "Invalid Email";
    }

    if (!(this.state.card.length === 16) || isNaN(parseInt(this.state.card))) {
      cardError = "Invalid Card Number";
    }

    if (!(this.state.cvv.length === 3) || isNaN(parseInt(this.state.cvv))) {
      cvvError = "Invalid CVV";
    }

    if (this.state.address === "") {
      addressError = "Invalid Address";
    }

    if (this.state.city === "") {
      cityError = "Invalid City";
    }

    if (this.state.state === "") {
      stateError = "Invalid State";
    }

    if (!(this.state.zip.length === 5) || isNaN(parseInt(this.state.zip))) {
      zipError = "Invalid Zip Code";
    }

    if (nameError) {
      this.setState({ nameError });
      return false;
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

    if (addressError) {
      this.setState({ addressError });
      return false;
    }

    if (cityError) {
      this.setState({ cityError });
      return false;
    }

    if (stateError) {
      this.setState({ stateError });
      return false;
    }

    if (zipError) {
      this.setState({ zipError });
      return false;
    }

    return true;
  };

  /**
   * Renders the checkout component
   */
  render() {
    var cart;
    this.state.submitted ? (cart = this.state.cart) : (cart = this.props.cart);
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
        ____________________________________________
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
          <p className="red">
            <i>{this.state.nameError}</i>
          </p>
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
          <p className="red">
            <i>{this.state.addressError}</i>
          </p>
          <br />
          <Form.Row>
            <Form.Group as={Col}>
              <FormLabel>City: </FormLabel>
              <FormControl
                name="city"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
              <p className="red">
                <i>{this.state.cityError}</i>
              </p>
            </Form.Group>
            <Form.Group as={Col}>
              <FormLabel>State: </FormLabel>
              <FormControl
                name="state"
                className="w-50"
                disabled={this.state.cartEmpty || this.state.submitted}
                onChange={(e) => this.handleChange(e)}
              />
              <p className="red">
                <i>{this.state.stateError}</i>
              </p>
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
            onClick={() => this.handleSubmit(cart)}
            disabled={this.state.cartEmpty || this.state.submitted}
            onChange={(e) => this.handleChange(e)}
          >
            Submit
          </Button>
        </Form>
        {this.state.submitted ? (
          <Order items={cart} userInfo={this.state} total={total} />
        ) : null}
      </div>
    );
  }
}

export default CheckOut;
