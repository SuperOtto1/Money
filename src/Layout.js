import React from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-primary">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Currency Exchange Rates</span>
        </Link>
      </nav>
      <div className="container py-3">{props.children}</div>
      <footer className="p-3 bg-light">
        <div>
          <span className="border-top p-2">
            This site was created by Otto Schiffhauer with the help of{" "}
            <a href="https://www.altcademy.com/">Altcademy</a>
            <h4>
              View my other <a href="#">Works</a>
            </h4>
          </span>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Layout;
