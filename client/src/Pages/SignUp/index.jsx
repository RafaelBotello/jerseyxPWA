import React from "react";
import httpClient from "../../httpClient";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";

// sign up form behaves almost identically to log in form. We could create a flexible Form component to use for both actions, but for now we'll separate the two:
class SignUp extends React.Component {
  state = {
    fields: { name: "", email: "", password: "" }
  };

  onInputChange(evt) {
    console.log(this.state);
    this.setState({
      fields: {
        ...this.state.fields,
        [evt.target.name]: evt.target.value
      }
    });
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    httpClient.signUp(this.state.fields).then(user => {
      console.log(this.state);
      this.setState({ fields: { name: "", email: "", password: "" } });
      if (user) {
        this.props.onSignUpSuccess(user);
        this.props.history.push("/");
      }
    });

    console.log(this.state);
  }

  render() {
    const { name, email, password } = this.state.fields;
    return (
      <div className=" container-fluid signUpcontainer">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>Sign Up</h1>
            <form
              onChange={this.onInputChange.bind(this)}
              onSubmit={this.onFormSubmit.bind(this)}
            >
              <input
                className="form-control"
                type="text"
                placeholder="Name"
                name="name"
                value={name}
              />

              <input
                className="form-control"
                type="text"
                placeholder="Email"
                name="email"
                value={email}
              />

              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                value={password}
              />
              <button className="btn btn-danger" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default SignUp;
