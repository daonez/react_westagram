import React from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";

class Navigation extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/main" component={Main} />
      </Switch>
    );
  }
}

export default Navigation;
