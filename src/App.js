import React, { Component } from "react";
import Header from "./components/header/Header";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
      </div>
    );
  }
}

export default App;
