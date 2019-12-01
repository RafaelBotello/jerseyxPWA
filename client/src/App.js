import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Components/Products/style.css";
import Index from "./Pages/Index";
import ProductsPage from "./Pages/Products";
import ContactsPage from "./Pages/Contact";
import Footer from "./Components/Footer";
import "./App.css";
import httpClient from "./httpClient";
import LogOut from "./Pages/LogOut";
import SignUp from "./Pages/SignUp";
import LogIn from "./Pages/LogIn";
import Navbar from "./Components/Navbar";
import { Admin } from "./Pages/Admin";

class App extends React.Component {
  state = { currentUser: httpClient.getCurrentUser() };

  onLoginSuccess(user) {
    this.setState({ currentUser: httpClient.getCurrentUser() });
  }

  logOut() {
    httpClient.logOut();
    this.setState({ currentUser: null });
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Navbar currentUser={currentUser}></Navbar>
        <Switch>
          <Route
            path="/login"
            render={props => {
              return (
                <LogIn
                  {...props}
                  onLoginSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />

          <Route
            path="/logout"
            render={props => {
              return <LogOut onLogOut={this.logOut.bind(this)} />;
            }}
          />

          {/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
          <Route
            path="/signup"
            render={props => {
              return (
                <SignUp
                  {...props}
                  onSignUpSuccess={this.onLoginSuccess.bind(this)}
                />
              );
            }}
          />
          <Route exact path="/" component={Index} />
          <Route exact path="/product" component={ProductsPage} />
          <Route exact path="/contact" component={ContactsPage} />
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </div>
    );
  }
}

export default App;
