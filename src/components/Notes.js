import React, { Component } from "react";
import { CardColumns, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddNote from "./AddNote";

import "../static/Notes.css";

import axios from "axios";
import { connect } from "react-redux";

import { USERS_URL } from "../api/constants";
import { getConfig } from "../utils/getConfig";
import { ErrorHandler } from "../utils/ErrorHandler";

class Notes extends Component {
  state = {
    notes: [],
    error: null,
  };

  componentDidMount() {
    axios
      .get(USERS_URL + this.props.username + "/notes", getConfig())
      .then((res) => {
        this.setState({
          notes: res.data,
        });
      })
      .catch((err) => {
        this.setState({
          error: ErrorHandler(err),
        });
      });
  }

  render() {
    let notes = null;
    const arr = this.state.notes;

    notes = (
      <div style={{ marginTop: "5vw" }}>
        <CardColumns
          style={{ marginLeft: "10vw", marginRight: "10vw", maxWidth: "75vw" }}
        >
          {arr.map((note) => {
            return (
              <Card className="card-shadow">
                <Card.Body>
                  <Link to={"/WeScribe_Frontend/board" + note.boardID}>
                    <Card.Title>{note.title}</Card.Title>
                  </Link>
                  <Card.Text>{note.description}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    Created at{" "}
                    {new Date(note.created).toLocaleDateString() +
                      " " +
                      new Date(note.created).toLocaleTimeString()}
                  </small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
      </div>
    );

    return (
      <div>
        <AddNote />
        <br />
        {notes}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};

export default connect(mapStateToProps, null)(Notes);
