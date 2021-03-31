// src/App.js
import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>Dugme za setLocalStorage</button>
      </div>
    );
  }
}

export default App;
