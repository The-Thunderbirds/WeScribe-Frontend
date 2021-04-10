import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from './actions/auth';

import './App.css';

import BaseRouter from './routes';
import MainLayout from './Layout/MainLayout';

function App(props) {

  useEffect(() => {
    props.onTryAutoSignup();
  });
  
  return (
    <div className="App">
        <Router>
          <MainLayout {...props}>
            <BaseRouter />
          </MainLayout>
        </Router>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => 
    dispatch(
      actions.authCheckState()
    ),
  };
};

export default connect(null, mapDispatchToProps)(App);
