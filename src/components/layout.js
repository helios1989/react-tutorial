import React, { Component } from "react";
import Header from "./Header/header";
class Layout extends Component {
  constructor() {
    super();
    this.state = {
      title: "Welcome Vergel Barit"
    };
  }

  changeTitle(title) {
    this.setState({ title });
    console.log(title);
  }
  render() {
    return (
      <Header
        changeTitle={this.changeTitle.bind(this)}
        title={this.state.title}
      />
    );
  }
}
export default Layout;
