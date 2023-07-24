import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import BrandIcon from "parts/IconText";
import "assets/scss/header.scss";

const Header = (props) => {
  const getNavLinkClass = (path) => {
    return window.location.pathname === path ? " active" : "";
  };

  const [isActive, setIsActive] = useState(false);

  if (props.isCentered) {
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="/" type="link">
                Stay<span className="text-gray-900">cation.</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );
  }

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light px-0">
            <BrandIcon />
            <button
              class="navbar-toggler"
              type="button"
              onClick={() => setIsActive(!isActive)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isActive ? "show" : ""}`}
            >
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
};

export default Header;
