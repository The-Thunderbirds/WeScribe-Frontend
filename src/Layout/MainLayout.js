import '../static/MainLayout.css'

import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import { withRouter } from 'react-router-dom';

function MainLayout(props) {
  return (
    <div className="mainContainer">
        {props.children}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    username: state.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainLayout)
);