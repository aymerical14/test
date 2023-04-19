import React from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "@iconify/react";

import documentIcon from '@iconify/icons-carbon/document';
import codeSandboxOutlined from '@iconify/icons-ant-design/code-sandbox-outlined';
import subscriptionsCreatedOutlined from '@iconify/icons-eos-icons/subscriptions-created-outlined';

import routes from "../../../config/routes";

import "./Sidebar.styles.scss";

const Sidebar = ({ params }) => {
  return (
    <div className="l-sidebar">{console.log("params ", params)}
      <div className="nav-list">
        <div className="nav-group">
          <NavLink
            to={`/apis/${params.id}/documentation`}
            className="nav-link"
            title="Tableau de bord"
            activeClassName="active"
            exact
          >
            <div className="nav-preview">
              <Icon
                icon={documentIcon}
                style={{ color: "#000", fontSize: "24px" }}
              />
            </div>
            <div className="nav-title">Documentation</div>
          </NavLink>
          <NavLink
            to={`/apis/${params.id}/subscriptions`}
            className="nav-link"
            title="Paiements"
            activeClassName="active"
          >
            <div className="nav-preview">
              <Icon
                icon={subscriptionsCreatedOutlined}
                style={{ color: "#000", fontSize: "24px" }}
              />
            </div>
            <div className="nav-title">Souscriptions</div>
          </NavLink>
          <NavLink
            to={`/apis/${params.id}/sandbox`}
            className="nav-link"
            title="Factures"
            activeClassName="active"
          >
            <div className="nav-preview">
              <Icon
                icon={codeSandboxOutlined}
                style={{ color: "#000", fontSize: "27px" }}
              />
            </div>
            <div className="nav-title">Sandbox</div>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
