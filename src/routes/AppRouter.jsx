import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthRoute from "../components/general/AuthRoute";
import Dashboard from "../screens/dashboard/dashboard";
import LoginScreen from "../screens/login/LoginScreen";
import Shop from "../screens/shop/shop";

function AppRouter() {
  let str = localStorage.getItem("user");
  let parsedUser = JSON.parse(str);
  let authed = false;
  if (parsedUser !== null) {
    authed = true;
  }
  return (
    <BrowserRouter>
      <Switch>
        {!authed ? (
          <>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={LoginScreen} />
          </>
        ) : (
          <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
        )}
        <AuthRoute path="/dashboard" authed={authed} component={Dashboard} />
        <AuthRoute path="/shop" authed={authed} component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
