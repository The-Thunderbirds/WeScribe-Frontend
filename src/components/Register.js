import React, { useState } from "react";

import { connect } from "react-redux";
import * as actions from "../actions/auth";
import { ErrorHandler } from "../utils/ErrorHandler";

function RegisterForm(props) {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
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

    props.onAuth(
      state.firstname,
      state.lastname,
      state.username,
      state.email,
      state.password
    );
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
          <form name="register">
            <h3>Register</h3>
            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="Firstname"
                value={state.firstname}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Lastname"
                value={state.lastname}
                onChange={handleChange}
              />
            </div>

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
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={state.email}
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
              Register
            </button>

            <div className="forgot-password text-right">
              Already registered?{" "}
              <a href="/WeScribe-Frontend/login"> Sign In</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
    isAuthenticated: state.isAuthenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (firstname, lastname, username, email, password) =>
      dispatch(
        actions.authSignup(firstname, lastname, username, email, password)
      ),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
