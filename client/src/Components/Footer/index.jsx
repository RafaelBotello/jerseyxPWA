import React from "../../../node_modules/react";
import "./style.css";
import { FontAwesomeIcon } from "../../../node_modules/@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faYoutube,
  faTwitter,
  faGoogle
} from "../../../node_modules/@fortawesome/free-brands-svg-icons";

function Footer() {
  let stylefoot = {
    width: "100%",
    display: "block",
    height: "10%;"
  };

  let stylecont = {
    display: "block"
  };
  return (
    <footer className="page-footer font-small bg-light" style={stylefoot}>
      <hr />
      <div className="container" style={stylecont}>
        <div className="row">
          <div className="col-md-12 col-xs-12 text-center py-5">
            <div className="flex-center limit-con">
              <a
                href="https://google.com"
                target="blank"
                className="icon gplus-ic"
              >
                <FontAwesomeIcon
                  className="limit"
                  icon={faGoogle}
                  color="black"
                  size="3x"
                />
              </a>
              <a
                href="https://facebook.com"
                target="blank"
                className="icon fb-ic"
              >
                <FontAwesomeIcon
                  className="limit"
                  icon={faFacebookF}
                  color="black"
                  size="3x"
                />
              </a>
              <a
                href="https://twitter.com"
                target="blank"
                className="icon tw-ic"
              >
                <FontAwesomeIcon
                  className="limit"
                  icon={faTwitter}
                  color="black"
                  size="3x"
                />
              </a>
              <a
                href="https://www.instagram.com/jimmyplox/?hl=en"
                target="blank"
                className="icon ins-ic"
              >
                <FontAwesomeIcon
                  className="limit"
                  icon={faInstagram}
                  color="black"
                  size="3x"
                />
              </a>
              <a
                href="https://youtube.com"
                target="blank"
                className="icon pin-yt"
              >
                <FontAwesomeIcon
                  className="limit"
                  icon={faYoutube}
                  color="black"
                  size="3x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        &copy; 2018 Copyright:
        <a
          href="https://rafaelbotello.github.io/ecommerce/#"
          className="footer-link"
        >
          {" "}
          Jersey X
        </a>
        <p>Last updated: Oct 1 2019</p>
      </div>
    </footer>
  );
}
export default Footer;
