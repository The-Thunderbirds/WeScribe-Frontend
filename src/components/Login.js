import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../actions/auth";
import { ErrorHandler } from "../utils/ErrorHandler";

function LoginForm(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onAuth(state.username, state.password);
  };

  const onAuthenticated = () => {
    props.history.push("/WeScribe-Frontend/board");
  };

  if (props.isAuthenticated) {
    onAuthenticated();
  }

  let errorMessage = null;
  if (props.error) {
    errorMessage = <p>{ErrorHandler(props.error)}</p>;
  }

  return (
    <div>
      <div style={{ color: "red" }}>{errorMessage}</div>
      <div className="outer">
        <div className="inner">
          <form name="login">
            <h3>Login</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Username"
                value={state.username}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={state.password}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-dark btn-lg btn-block"
              onClick={handleSubmit}
            >
              Sign in
            </button>

            <div className="forgot-password text-right">
              Haven't registered yet?
              <a href="/WeScribe-Frontend/register"> Sign Up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    error: state.error,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
