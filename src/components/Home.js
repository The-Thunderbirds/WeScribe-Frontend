import React from "react";
import illustration from "../assets/illustration.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
function Home(props) {
  const { isAuthenticated } = props;
  return (
    <div class="container px-4" style={{ marginTop: "19vh" }}>
      <div class="row flex-lg-row-reverse align-items-left g-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img
            src={illustration}
            class="d-block mt-n5 mx-5 img-fluid"
            alt="Collaborate"
            loading="lazy"
            width="700"
            height="500"
          ></img>
        </div>

        <div class="col-lg-6">
          <h1 class="display-5 fw-bold lh-1 mb-3 text-justify">WeScribe</h1>
          <p class="lead text-justify">
            {" "}
            Platform for real-time collaborative notes making using a whiteboard
            or text editor, while attending live lectures or watching youtube
            videos.
          </p>
          <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            {!isAuthenticated
              ? [
                  <div>
                    <a
                      href="/WeScribe_Frontend/login"
                      type="button"
                      class="btn btn-outline-primary btn-lg px-4 me-md-2"
                    >
                      Sign In
                    </a>
                    <label style={{ color: "transparent" }}>.......</label>
                    <a
                      href="/WeScribe_Frontend/board"
                      type="button"
                      class="btn btn-outline-secondary btn-lg px-4 me-md-2"
                    >
                      Try a Demo Now!
                    </a>

                    <p
                      class="text-muted"
                      style={{ fontSize: "0.8em", marginRight: "55%" }}
                    >
                      *Sign in to save your notes
                    </p>
                  </div>,
                ]
              : [
                  <a
                    href="/WeScribe_Frontend/notes"
                    type="button"
                    class="btn btn-outline-primary btn-lg px-4 me-md-2"
                  >
                    View your Notes
                  </a>,
                ]}
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    username: state.username,
  };
};

export default connect(mapStateToProps)(Home);
