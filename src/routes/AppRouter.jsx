import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "../screens/dashboard/dashboard";
import LoginScreen from "../screens/login/LoginScreen";
import Shop from "../screens/shop/shop";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
