// src/App.js
import React, { Component } from "react";

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem("Arena", "Selection Month");
  };

  getLocalStorage = () => {
   let myLocalStorageData = localStorage.getItem("Arena");
   console.log(myLocalStorageData);
   return (myLocalStorageData);
   }

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setLocalStorage}>Dugme za setLocalStorage</button>
        <button type="button" onClick={this.getLocalStorage}>Dugme za getLocalStorage</button>
      </div>
    );
  }
}

export default App;
