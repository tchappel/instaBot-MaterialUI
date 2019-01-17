import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Album from "./Album.js";
import Navbar from "./components/Navbar/index";
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <CssBaseline />
          <div className="App">
            <Navbar />
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
