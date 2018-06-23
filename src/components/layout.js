import React, { Component } from "react";
import Header from "./Header/header";
class Layout extends Component {
  constructor() {
    super();
    this.name = "Vergel Barit";
  }
  // getName(prefix) {
  //   return prefix + " Vergel Barit";
  // }
  render() {
    // let header = [<HeaderContainer />];

    return <Header />;
  }
}
export default Layout;
