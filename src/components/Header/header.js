import React, { Component } from "react";
import Title from "./title";
import Content from "./content";

class Header extends Component {
  render() {
    return (
      <div>
        <Title />
        <header>
          Hello world this
          <Content />
        </header>
      </div>
    );
  }
}

export default Header;
