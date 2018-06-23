import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./Header/header";
import Home from "./Home/home";
import ContactUs from "./ContactUs/contactUs";
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
      <div class="container">
        <Header
          changeTitle={this.changeTitle.bind(this)}
          title={this.state.title}
        />
        <Router>
          <div>
            <header>
              <Link to="/">
                <button>HOME</button>
              </Link>
              <Link to="/contact">
                <button>CONTACT US</button>
              </Link>
            </header>
            <Route exact path="/" component={Home} />
            <Route path="/contact" component={ContactUs} />
          </div>
        </Router>
      </div>
    );
  }
}
export default Layout;
