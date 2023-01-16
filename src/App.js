import React, { Component } from "react";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import "./app.css";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}

export default App;
