import React from "react";
import { Link } from "react-router-dom";

import PageNotFound from "../assets/PageNotFound.png";

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <img src={PageNotFound} />
        <p style={{ textAlign: "center" }}>
          <Link to="/WeScribe_Frontend/">Go to Home </Link>
        </p>
      </div>
    );
  }
}
