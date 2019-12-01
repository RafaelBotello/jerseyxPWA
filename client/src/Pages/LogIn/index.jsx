import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import httpClient from "../../httpClient";
import "./style.css";

class LogIn extends React.Component {
  state = {
    fields: { email: "", password: "" }
  };

  onInputChange(evt) {
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    httpClient.logIn(this.state.fields).then(user => {
      this.setState({ fields: { email: "", password: "" } });
      if (user) {
        this.props.onLoginSuccess(user);
        this.props.history.push("/");
      }
    });
  }

  render() {
    const { email, password } = this.state.fields;
    return (
      <div className="logincontainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <h1>Log In</h1>
              <form
                className="form-group"
                onChange={this.onInputChange.bind(this)}
                onSubmit={this.onFormSubmit.bind(this)}
              >
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    class="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    class="form-control"
                  />
                </div>
                <button className="btn btn-primary">Log In</button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LogIn;
