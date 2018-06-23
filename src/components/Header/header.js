import React, { Component } from "react";
import Title from "./title";
import Content from "./content";

class Header extends Component {
  handleChange(e) {
    const title = e.target.value;
    console.log(this.props);
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title />
        <header>
          <Title title={this.props.title} />
          <input
            value={this.props.title}
            onChange={this.handleChange.bind(this)}
          />
          <Content />
        </header>
      </div>
    );
  }
}

export default Header;
