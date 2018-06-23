import React, { Component } from "react";
import HeaderContainer from "./header_container";
class Layout extends Component {
  constructor() {
    super();
    this.name = "Vergel Barit";
  }
  // getName(prefix) {
  //   return prefix + " Vergel Barit";
  // }
  render() {
    return <HeaderContainer />;
  }
}
export default Layout;
