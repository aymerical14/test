import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from 'react-router-dom';
import { createStructuredSelector } from "reselect";
import { Icon } from "@iconify/react";
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';

import caretDownFill from "@iconify/icons-bi/caret-down-fill";
import notificationFill from "@iconify/icons-ri/notification-fill";

import routes from "../config/routes";

import LogoBrand from "../components/UIs/LogoBrand/LogoBrand.ui";

// import { selectAuthUser } from "../../../store/reducers/auth/auth.selectors";

// import { signoutRedirect } from "../../../utils/userManager";

import "./NavMenu.styles.scss";

const NavMenu = ({ user }) => {
  const [activeMenu, setActiveMenu] = useState('home');
  const history = useHistory();
  const logout = (e) => {
    e.preventDefault();
    // signoutRedirect();
  };

  const handleChangeMenu = (menu, route='') => {
    setActiveMenu(menu);
    history.push(route);
  }

  return (
    <div className="l-header">
      <nav role="navigation" className="l-navbar navbar navbar-expand-sm">
        <div className="container-fluid">
          <Link className="navbar-brand" to={routes.root}>
            <LogoBrand brandName="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav switch-language ml-auto  my-2 my-lg-0">
                {/* <li onClick={() => handleChangeMenu("home")} className="nav-item">
                  <a className={`text-white ${activeMenu == "home" ? "active" : ""}`} to="/">Home</a>
                </li> */}
                {/* <li className="nav-item" onClick={() => handleChangeMenu('documentation', 'documentation')}>
                  <a className={`text-white ${activeMenu == "documentation" ? "active" : ""}`} to="/documentation">Documentation</a>
                </li>
                <li className="nav-item" onClick={() => handleChangeMenu('sandbox', 'sandbox')}>
                  <a className={`text-white ${activeMenu == "sandbox" ? "active" : ""}`} to="/applications">Applications</a>
                </li> */}
              {/* <li className="nav-item">
                <div className="dropdown dropdown-notification">
                  <a
                    className="nav-link custom-dropdown-toggle"
                    href="#!"
                    id="profile"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <Icon
                      icon={notificationFill}
                      style={{ color: "#fff", fontSize: "33px" }}
                    />
                  </a>
                  <div className="dropdown-menu" aria-labelledby="profile">
                    <div className="dropdown-infos">
                      <span className="dropdown-infos-name">Notifications</span>
                    </div>
                    <span className="dropdown-item text-muted">
                      Aucune notification
                    </span>
                  </div>
                </div>
              </li> */}
              {/* <li className="nav-item">
                {!(!user || user.expired) && (
                  <div className="dropdown">
                    <a
                      className="nav-link custom-dropdown-toggle"
                      href="#!"
                      id="profile"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <div className="avatar-icon mr-1">
                        {user && !user.expired
                          ? user.profile.name?.charAt(0)?.toUpperCase()
                          : null}
                      </div>{" "}
                      <span className="avatar-name">
                        {user && !user.expired ? user.profile.name : null}
                      </span>
                      <Icon icon={caretDownFill} style={{ color: "#fff" }} />
                    </a>
                    <div className="dropdown-menu" aria-labelledby="profile">
                      <div className="dropdown-infos">
                        <span className="dropdown-infos-name">
                          {user && !user.expired
                            ? user.profile.preferred_username
                            : null}
                        </span>
                        <a
                          href={`mailto:joel.jareth@orange.com`}
                          className="dropdown-infos-email"
                        >
                          {user && !user.expired ? user.profile.email : null}
                        </a>
                      </div>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://oth-digit.orange.local/Manage"
                      >
                        Mon profil
                      </a>
                      <a
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                        href="http://oth-digit.orange.local/Manage/ChangePassword"
                      >
                        Modifier mon mot de passe
                      </a>
                      <a
                        id="profile-logout"
                        className="dropdown-item"
                        onClick={logout}
                        href="#!"
                      >
                        Déconnexion
                      </a>
                    </div>
                  </div>
                )}
              </li> */}
            </ul>
            {/* <div className="switch-language ml-auto  my-2 my-lg-0">
               {!(!user || user.expired) && ()}
            </div> */}
          </div>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  // user: selectAuthUser,
});

// export default connect(mapStateToProps)(NavMenu);
export default NavMenu;
