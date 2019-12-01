import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import "./style.css";

function ContactPage() {
  let block = {
    display: "block"
  };
  let button = {
    margin: "10px",
    display: "block",
    width: "100%"
  };
  return (
    <div>
      <div className="parallax parallax-2" />
      <div className="container-fluid text-dak" style={block}>
        <section>
          <div className="col-md-12 bg-light">
            <form className="form-group" id="form" action="#">
              <div className="form-row">
                <div className="col-md-5" />
                <div className="col-md-3">
                  <h1>Contact Us!</h1>
                </div>
                <div className="col-md-4" />
                <div className="col-md-3" />
                <div className="col-md-6">
                  <label className="col-form-label" for="name">
                    Name:
                  </label>
                  <input
                    id="name"
                    name="name"
                    data-validation-error-msg="You did not enter a name!"
                    data-validation="length alphanumeric"
                    data-validation-length="min4"
                    className="form-control"
                    type="text"
                  />
                </div>
                <div className="col-md-3 bg-transparent" />
                <div className="col-md-3 " />
                <div className="col-md-6">
                  <label className="col-form-label" for="email">
                    Email:
                  </label>
                  <input
                    id="email"
                    name="email"
                    data-validation="email"
                    data-validation-error-msg="You did not enter a valid email!"
                    className="form-control"
                    type="email"
                  />
                </div>
                <div className="col-md-3" />
                <div className="col-md-3" />
                <div className="col-md-6 ">
                  <label className="col-form-label" for="message">
                    Message
                  </label>
                  <br />
                  <textarea
                    id="message"
                    name="message"
                    data-validation="length alphanumeric"
                    data-validation-error-msg="You did not enter a comment!"
                    data-validation-length="25-200"
                    className="form-control"
                    cols="50"
                    placeholder="Write a message..."
                    rows="10"
                  />
                </div>
                <div className="col-md-3" />
                <div className="col-md-4" />
                <div className="col-md-4">
                  <button
                    className="btn btn-primary"
                    style={button}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="col-md-4" />
              </div>
            </form>
          </div>
        </section>
      </div>
      <div className="parallax parallax-1" />
      <Footer />
    </div>
  );
}

export default ContactPage;
