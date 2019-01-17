import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Album from "./Album.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div className="App">
            <Route path="/" exact component={Album} />
            <Route path="/login" />
            <Route />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
