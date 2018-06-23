import React, { Component } from "react";

class headerComponent extends Component {
  constructor() {
    super();
    this.name = "Vergel Barit";
  }
  // getName(prefix) {
  //   return prefix + " Vergel Barit";
  // }
  render() {
    return <div>Hello world this {this.name}</div>;
  }
}

export default headerComponent;
