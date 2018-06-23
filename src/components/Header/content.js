/* this content file pertains the behaviour of state*/

import React, { Component } from "react";

class Content extends Component {
  constructor() {
    super();
    this.state = { name: "Vergel Barit" };
  }
  render() {
    setTimeout(() => {
      this.setState({
        name: "VERGEL BARI IS THE BEST"
      });
    }, 1000);
    return <div>Welcome {this.state.name}</div>;
  }
}

export default Content;
