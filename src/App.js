import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import Home from "./pages/Home/home.page";
import { Layout } from "./components/Layout";
import './App.css';

import { selectUserAuthentication } from "./store/reducers/user/user.selectors";
import { requestAuthenticationAsync } from "./store/reducers/user/user.actions";

import routes from "./config/routes";

function App({ requestAuthenticationAsync, authenticated }) {

  useEffect(() => {
    requestAuthenticationAsync();
  }, [requestAuthenticationAsync]);

  return (
    <>{console.log("authenticated ", authenticated)}
      {
        authenticated === true 
        ?
        <Layout>
          <Switch>
            <Route exact path={routes.root} component={Home} />
          </Switch>        
        </Layout>
        :
        null
      }
    </>
    
  );
}

const mapStateToProps = createStructuredSelector({
  authenticated: selectUserAuthentication
});

const mapDispatchToProps = (dispatch) => ({
  requestAuthenticationAsync: () => dispatch(requestAuthenticationAsync())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
