import { NavLink } from "react-router-dom";

import { Navbar, NavContainer } from "./LocalNavigation.styles";

const LocalNavigation = ({ links = [] }) => {
  return (
    links.length > 0 && (
      <Navbar role="navigation" className="o-nav-local navbar-light">
        <NavContainer className="container nav">
          {links.map((link, key) => (
            <li key={key} className="nav-item">
              <NavLink className="nav-link" to={`${link.route}`}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </NavContainer>
      </Navbar>
    )
  );
};

export default LocalNavigation;
