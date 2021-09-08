import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginScreen from "../screens/login/LoginScreen";

function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={LoginScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;
