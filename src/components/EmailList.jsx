import {
  ArrowDropDown,
  CheckBoxOutlineBlank,
  ChevronLeft,
  ChevronRight,
  Inbox,
  KeyboardHide,
  LocalOffer,
  LocalOfferOutlined,
  MoreVert,
  People,
  PeopleOutline,
  Redo,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Section from "./Section";

import "./css-files/EmailList.css";
import EmailRow from "./EmailRow";
import { Link } from "react-router-dom";
import { firebaseDb } from "../firebase";
function EmailList() {
  const [emails, setEmails] = useState([]);

  // access the mails collection from firebase, sort it by timestamp,
  // then anytime that changes (.onSnapshot) setEmails to all the mails we've recieved
  useEffect(() => {
    firebaseDb
      .collection("emails")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setEmails(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  return (
    <div className="emailList">
      <div className="emailList__settings">
        <div className="emailList__settings-left">
          <CheckBoxOutlineBlank sx={{ cursor: "pointer" }} />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <Redo />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="emailList__settings-right">
          <IconButton>
            <ChevronLeft />
          </IconButton>{" "}
          <IconButton>
            <ChevronRight />
          </IconButton>{" "}
          <IconButton>
            <KeyboardHide />
          </IconButton>{" "}
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>

      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={PeopleOutline} title="Social" color="#1a73e8" />
        <Section Icon={LocalOfferOutlined} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow title="! tip" subject="press the user icon to log out" />
        <EmailRow
          title="! link to my github"
          subject=":b"
          linkDesc
          description="https://github.com/diffim"
        />

        {emails.map((email) => (
          <EmailRow
            key={email.id}
            id={email.id}
            title={email.data.to}
            subject={email.data.subject}
            description={email.data.message}
            image={email.data.image ? email.data.image : undefined}
            time={new Date(email.data.timestamp?.seconds * 1000).toUTCString()}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
