import React, { Component } from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import Footer from "./Footer";
import SiteNav from "./SiteNav";
import Jumbo from "./Jumbo";
import Content from "./Content";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Friends from "./Friends";
import AddFriendForm from "./AddFriendForm";
import ProductForm from "./ProductForm";
import Cars from "./Cars";
import CarsHide from "./CarsHide";
// import Practice2 from "./Practice2";
// import Practice from "./Practice";

// import * as userServices from "./services/userServices"

import "./App.css";

class App extends Component {
  componentDidUpdate(prevProps) {
    let currentPath = this.props.location.pathname;
    let previousPath = prevProps.location.pathname;

    console.log("App", { currentPath, previousPath });
  }

  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <SiteNav></SiteNav>
          <main role="main" style={{ marginTop: "80px" }}>
            <div></div>

            {/* <div>
              <NavLink to="/practice">wizards</NavLink>
            </div> */}
          </main>
          <div>
            <Route path="/jumbo" exact={true} component={Jumbo}></Route>
            <Route path="/content" exact={true} component={Content}></Route>
            <Route path="/register" exact={true} component={Register}></Route>
            <Route path="/login" exact={true} component={Login}></Route>
            <Route path="/home" exact={true} component={Home}></Route>
            <Route path="/friends" exact={true} component={Friends}></Route>
            <Route
              path="/friends/new"
              exact={true}
              component={AddFriendForm}
            ></Route>{" "}
            <Route
              path="/friends/:id/edit"
              exact={true}
              component={AddFriendForm}
            ></Route>
            <Route
              path="/productForm"
              exact={true}
              component={ProductForm}
            ></Route>
            <Route path="/cars" exact={true} component={Cars}></Route>
            <Route path="/cars/hide" exact={true} component={CarsHide}></Route>
          </div>
          <Footer></Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
