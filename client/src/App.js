import React, { Component } from "react";
import "./App.css";

// NavBar and Footer Components
import NavBar from "./components/navBar/NavBar";
import Footer from "./components/Footer/footer";

//Landing Page
import Home from "./pages/home/Home"

//Locate User and Display Products Components
import ProductBanner from "./pages/productBanner/productBanner";
import Products from "./pages/products/products";


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
        <Route exact path="/products/">
          <ProductBanner/>
        </Route>
        {/* <Router basename="/products">
          <Route exact path="/products/:id">
            <ProductBanner/>
            <Products Id={storeSelected.storeId} callBack={() => setStoreSelected}></Products>
          </Route>
        </Router> */}
      </Switch>
    </Router>
  );
}


export default App;
