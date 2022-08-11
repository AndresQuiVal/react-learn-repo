import React, { Component } from "react";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    // the Route passes this parameters to the component referenced:
    // location, history (in where query string information is located)
    // match (here the url parameters are located) (match.params.<parameter>)
    // for more, reference the docs: https://v5.reactrouter.com/web/api/Router

    return (
      <div>
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/products/:id" component={ProductDetails}/>
            <Redirect from="/products" to="posts"/>
            <Route path="/products" render={props => <Products sortBy="newest" {...props}/>}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/admin" component={Dashboard}/>
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home}/>
            <Redirect to="not-found"/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
