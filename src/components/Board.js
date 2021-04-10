import { useState, useEffect } from "react";
import Editor from "./Editor.js";
import "../static/Board.css";

import axios from "axios";

import { NOTES_URL, NOTES_DETAILS_URL } from "../api/constants";
import { getConfig } from "../utils/getConfig";
import { ErrorHandler } from "../utils/ErrorHandler";

import {
  DEFAULT_YOUTUBE_EMBED,
  DEFAULT_YOUTUBE_NAME,
  YOUTUBE_REGEX,
} from "../utils/constants.js";

function Board(props) {
  const [idState, setIdState] = useState("");

  const [nameState, setNameState] = useState({
    name: DEFAULT_YOUTUBE_NAME,
    value: DEFAULT_YOUTUBE_EMBED,
  });

  const [boardState, setBoardState] = useState({
    value: "firepad",
  });

  useEffect(() => {
    axios
      .get(NOTES_URL)
      .then((res) => {
        const match = "/" + window.location.hash;
        const result = res.data.filter((e) => e.boardID === match);
        const id = result[0].id;
        const videoLink = result[0].videoLink;
        setIdState(id);
        if (videoLink !== "") {
          connectVideo(videoLink);
        }
      })
      .catch((err) => {
        console.log(ErrorHandler(err));
      });
  }, []);

  const youtubeURLCheck = (url) => {
    var regExp = YOUTUBE_REGEX;
    var match = url.match(regExp);
    if (match && match[2].length == 11) {
      return "https://www.youtube.com/embed/" + match[2] + "?autoplay=0";
    } else {
      return url;
    }
  };

  const connectVideo = (e) => {
    var url = "";
    if (typeof e === "object") {
      url = e.target.value;
    } else if (typeof e === "string") {
      url = e;
    }
    if (url != undefined || url != "") {
      const value = youtubeURLCheck(url);
      setNameState({
        name: url,
        value: value,
      });
    }
    if (url.includes("zoom")) {
      const zoomIframe = document.getElementById("videoIframe");
      setTimeout(() => {
        zoomIframe.width = "200%";
      }, 10000);

      console.log("This is zoom url");
      setTimeout(() => {
        zoomIframe.width = "100%";
      }, 25000);
    }
  };

  const onChangeVideoState = (e) => {
    connectVideo(e);

    if (idState !== "") {
      e.preventDefault();

      axios
        .put(
          NOTES_DETAILS_URL + idState + "/",
          {
            videoLink: e.target.value,
          },
          getConfig()
        )
        .then((res) => {})
        .catch((err) => {
          console.log(ErrorHandler(err));
        });
    }
  };

  return (
    <div class="outerBoard">
      <div class="mainTrial">
        <a href="/WeScribe-Frontend/" style={{ color: "white" }}>
          Home
        </a>
        <div
          class="d-flex justify-content-center"
          style={{ marginTop: "10px" }}
        >
          <form className="form-inline">
            <label
              className="my-icon"
              style={{ paddingInlineEnd: "15px", color: "white" }}
            >
              Enter Video/Meeting URL:
            </label>
            <input
              className="form-control w-100 pl-2 rounded"
              type="text"
              value={nameState.name}
              onChange={onChangeVideoState}
            />
          </form>
        </div>
        <div className="row">
          <div className="column">
            <div className="videoWrap">
              <iframe
                id="videoIframe"
                src={nameState.value}
                className="video"
                frameBorder="0"
                allow="autoplay; encrypted-medial; gyroscope; picture-in-picture"
                allowFullScreen="1"
                title="video"
                width="100%"
              />
            </div>
          </div>
          <div className="column">
            <main style={{ maxHeight: "70vh", paddingTop: "1.3vw" }}>
              <div className="videoWrap">
                <Editor />
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
