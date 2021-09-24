import React, { Component } from "react";
import "./App.css";

import Home from "./pages/home/Home"
import NavBar from "./components/navBar/NavBar"

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar></NavBar>
      <Switch>
        <Route exact path="/" >
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;
