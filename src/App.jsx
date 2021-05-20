import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import FriendsDashboard from "./components/FriendsDashboard";
import FriendsAddOrEdit from "./components/FriendsAddOrEdit";
import ProductForm from "./components/ProductForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav />

          <main role="main">
            <Route
              path="/friends/:id/edit"
              exact={true}
              component={FriendsAddOrEdit}
            ></Route>

            <Route
              path="/productform"
              exact={true}
              component={ProductForm}
            ></Route>

            <Route path="/register" exact={true} component={Register}></Route>

            <Route path="/login" exact={true} component={Login}></Route>

            <Route path="/home" exact={true} component={Home}></Route>

            <Route
              path="/friends"
              exact={true}
              component={FriendsDashboard}
            ></Route>

            <Route
              path="/friends/add"
              exact={true}
              component={FriendsAddOrEdit}
            ></Route>
          </main>

          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
