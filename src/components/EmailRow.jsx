import {
  CheckBoxOutlineBlank,
  LabelImportantOutlined,
  StarBorderOutlined,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, redirect } from "react-router-dom";
import { selectMail } from "../features/mailSlice";
import "./css-files/Emailrow.css";

function EmailRow({ id, title, subject, description, time, image }) {
  const dispatch = useDispatch();

  function openMail() {
    dispatch(
      selectMail({
        id,
        title,
        subject,
        image,
        description,
        time,
      })
    );
  }

  return (
    <div onClick={openMail} key={id} className="link__container">
      <Link to={`/mail/${title}`} className="emailRow">
        <div className="emailRow__options">
          <IconButton>
            <CheckBoxOutlineBlank />
          </IconButton>

          <IconButton>
            <StarBorderOutlined />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>

        <div className="emailRow__messages">
          <h3 className="emailRow__title ">
            <p>{title}</p>
          </h3>
          <div className="emailRow__message">
            <h4>
              <p>{subject}</p>{" "}
              <span className="emailRow__description">
                {" "}
                - <span>{description}</span>{" "}
              </span>
            </h4>
          </div>
          <div className="emailRow__time">{time}</div>
        </div>
      </Link>
    </div>
  );
}

export default EmailRow;
