import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>Accueil</li>
        </NavLink>
        <NavLink
          to="/presentation"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Présentation</li>
        </NavLink>

        <li className="nav-portfolio">Scriptsoooo</li>
        <ul className="nav-projects">
          <NavLink
            to="/script-1"
            activeClassName="nav-active"
            className="hover"
          >
            Script 1
          </NavLink>
          <NavLink
            to="/script-2"
            activeClassName="nav-active"
            className="hover"
          >
            Script 2
          </NavLink>
          <NavLink
            to="/script-3"
            activeClassName="nav-active"
            className="hover"
          >
            Script 3
          </NavLink>
          <NavLink
            to="/script-4"
            activeClassName="nav-active"
            className="hover"
          >
            Script 4
          </NavLink>
        </ul>
        <NavLink
          to="/studi"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Studi</li>
        </NavLink>
        <NavLink
          to="/liens"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Liens externes</li>
        </NavLink>
        <NavLink
          to="/cybersecurite"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Cybersécurité</li>
        </NavLink>
        <NavLink
          to="/contact"
          exact
          className="hover"
          activeClassName="nav-active"
        >
          <li>Contact</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
