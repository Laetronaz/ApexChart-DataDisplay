import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import PopChart from "./components/PopChart";

class App extends Component {
  render() {
    return (
      <div className="container">
        <PopChart />
      </div>
    );
  }
}

export default App;
