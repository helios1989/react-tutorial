import React from "react";
import ReactDOM from "react-dom";
import HeaderContainer from "./components/header_container";
import Layout from "./components/layout";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
