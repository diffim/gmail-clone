import {
  ArrowBack,
  CheckCircle,
  Delete,
  Email,
  Error,
  ExitToApp,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
  WatchLater,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectOpenMail } from "../features/mailSlice";
import "./css-files/Mail.css";

function Mail() {
  const mail = useSelector(selectOpenMail);
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail__toolsLeft">
          <IconButton>
            <Link to="/" className="padding-top">
              <ArrowBack />
            </Link>
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <Error />
          </IconButton>
          <IconButton>
            <Delete />
          </IconButton>
          <IconButton>
            <Email />
          </IconButton>
          <IconButton>
            <WatchLater />
          </IconButton>
          <IconButton>
            <CheckCircle />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>

        <div className="mail__toolsRight padding-top">
          <IconButton>
            <UnfoldMore></UnfoldMore>
          </IconButton>
          <IconButton>
            <Print></Print>
          </IconButton>

          <IconButton>
            {" "}
            <ExitToApp />
          </IconButton>
        </div>
      </div>

      <div className="mail__body-container">
        <div className="mail__body">
          <div className="mail__bodyHeader">
            <h2>{mail?.subject}</h2>
            <LabelImportant className="mail__important" />
            <p>{mail?.title}</p>
            <p className="mail__time">{mail?.time}</p>
          </div>

          <div className="mail__message">
            <p>{mail?.description}</p>
          </div>

          {mail?.image ? (
            <div className="mail__img">
              <img src={mail.image} alt="gmailimg" className="postImage" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Mail;
