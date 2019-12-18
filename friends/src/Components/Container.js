import React, { Component } from "react";
import Login from "./Login";
import Friends from "./Friends";
import { Route, NavLink, withRouter, Redirect } from "react-router-dom";

export function Container(props) {
  const onLogout = () => {
    localStorage.removeItem("token");
    props.history.push("/");
  };
  return (
    <div className="container">
      <nav>
        <span>
          <NavLink exact to="/">
            Login
          </NavLink>
          <NavLink to="/friends"></NavLink>
        </span>
        <button onClick={onLogout}>Logout</button>
      </nav>

      <main>
        <Route exact path="/" component={Login} />

        <PrivateRoute path="friends" component={Friends} />
      </main>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    }
  />
);

function withAuthCheck(Component, props) {
  if (localStorage.getItem("token")) {
    return <Component {...props} />;
  }
  return <Redirect to="/" />;
}

export default withRouter(Container);
