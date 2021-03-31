// src/App.js
import React, { Component } from "react";

class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem("Paragon", "yes, but Arena first");
    sessionStorage.setItem("frontend", "React");
  };

  getMyStorage = () => {
    let myCookieData = document.cookie.match(new RegExp("(^| )Year=([^;]+)"))[2];
    console.log(myCookieData);
    let myLocalStorageData = localStorage.getItem("Paragon");
    console.log(myLocalStorageData);
    let mySessionStorageData = sessionStorage.getItem("frontend");
    console.log(mySessionStorageData);
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  };

  render() {
    return (
      <div className="App">
        <button type="button" onClick={this.setMyStorage}>Dugme za setMyStorage</button>
        <button type="button" onClick={this.getMyStorage}>Dugme za getMyStorage</button>
      </div>
    );
  }
  
}

export default App;
