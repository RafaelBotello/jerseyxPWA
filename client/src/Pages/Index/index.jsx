import React from "react";
import "./style.css";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";

function Home() {
  // Inline Styles
  let review = {
    padding: "30px",
    fontSize: "2.2rem"
  };

  let jerseyx = {
    padding: "20px",
    fontSize: "1.6rem"
  };

  let customers = {
    marginTop: "50px",
    fontSize: "3rem"
  };

  return (
    <div>
      <div
        id="carouselIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselIndicators" data-slide-to="1" />
          <li data-target="#carouselIndicators" data-slide-to="2" />
          <li data-target="#carouselIndicators" data-slide-to="3" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="./img/slide1.jpg"
              alt="First slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Welcome to Jersey X</h1>
              <p>
                <a href="/product" className="link">
                  Buy now.
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/slide5.jpg"
              alt="Second slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Check out our new products!</h1>
              <p>
                <a href="/product" className="link">
                  Visit now.
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/slide3.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>Buy for a friend.</h1>
              <p>
                <a href="/product" className="link">
                  Visit now.
                </a>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="./img/slide4.jpg"
              alt="Third slide"
            />
            <div className="carousel-caption d-none d-md-block">
              <h1>The perfect gift.</h1>
              <p>
                <a href="/product" className="link">
                  Visit now.
                </a>
              </p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselIndicators"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselIndicators"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 bg-light custom-img custom-img-6" />
          <div className="col-md-8 bg-light">
            <p style={customers} className="text-dark">
              At Jersey X, we care about our customers.
            </p>
          </div>
          <div className="col-md-7 bg-light text-dark" style={jerseyx}>
            <h2>Who we are</h2>
            <p>
              A global team behind a smart website Jersey X is kind of a
              peculiar bunch of very different people from all corners of the
              globe. One thing we all share is a belief that sports should unite
              people, and not get in their way.
            </p>
          </div>
          <div className="col-md-5 bg-light custom-img custom-img-4" />
          <div className="col-md-12 bg-light custom-img custom-img-3">
            <span className="img-text">
              <i>Jersey</i>
              <img
                src="./img/X.png"
                height="60"
                width="60"
                alt="Jersey X logo"
              />
            </span>
          </div>
          <div className="col-md-8 bg-light text-dark" style={review}>
            <h3>Don't forget to review our products!</h3>
            <p>Your opinion matters and helps us improve our products.</p>
            <a href="/contact" className="link">
              <i> Thank you!</i>
            </a>
          </div>
          <div className="col-md-4 bg-light custom-img custom-img-1" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
