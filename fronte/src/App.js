import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./Store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/user";

import Page404 from "./components/Page404";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Admin/Dashboard";

import Profil from "./components/ProfilClient/Profil";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // TODO: Clear current Profile

    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/profil" component={Profil} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/notif" component={Dashboard} />
            <Route path="/user" component={Dashboard} />
            <Route path="/event" component={Dashboard} />
            <Route path="/repas" component={Dashboard} />
            <Route path="/login" component={SignIn} />
            <Route exact={true} path="/" component={SignIn} />
            <Route component={Page404} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
