import React, { Component } from 'react';

import "../src/App.css";

import NaveBar from "./components/navbar";
import "./CSS/navBar.css";

import Home from "./components/home";
import "./CSS/home.css";




class App extends Component {
  render() {
    return (
      <div id="App">
        <NaveBar />
        <Home />
      </div>
    );
  }
}

export default App;
