import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            Boring Website
          </NavLink>
          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                className="nav-links"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/activities"
                className="nav-links"
                activeClassName="active"
              >
                Activities
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/jokes"
                className="nav-links"
                activeClassName="active"
              >
                Jokes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/memes"
                className="nav-links"
                activeClassName="active"
              >
                Memes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/dogs"
                className="nav-links"
                activeClassName="active"
              >
                Dogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/names"
                className="nav-links"
                activeClassName="active"
              >
                Names
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/game"
                className="nav-links"
                activeClassName="active"
              >
                Game
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
