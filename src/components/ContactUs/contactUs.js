import React, { Component } from "react";
import { Link } from "react-router-dom";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Link to="home"> Home </Link>
        <h1>this is ContactUs</h1>;
      </div>
    );
  }
}

export default ContactUs;
