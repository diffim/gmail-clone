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
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
function EmailList(props) {
  const [emails, setEmails] = useState([]);
  const user = useSelector(selectUser);

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

  console.log(emails);

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
        <Section Icon={Inbox} title="Primary" color="red" selected link="/" />
        <Section
          Icon={PeopleOutline}
          title="Private "
          color="#1a73e8"
          link="/private-mail"
        />
        <Section
          Icon={LocalOfferOutlined}
          title="Promotions"
          color="green"
          link=""
          disabled
        />
      </div>
      <div className="emailList__list">
        {props.privateMail ? (
          <>
            {emails.map((email) =>
              (email.data.isPrivateMessage && email.data.to === user.email) ||
              (email.data.isPrivateMessage &&
                email.data.from === user.email) ? (
                <EmailRow
                  key={email.id}
                  id={email.id}
                  userSent={email.data.from === user.email ? true : false}
                  title={email.data.to}
                  subject={email.data.subject}
                  description={email.data.message}
                  image={email.data.image ? email.data.image : undefined}
                  time={new Date(
                    email.data.timestamp?.seconds * 1000
                  ).toUTCString()}
                />
              ) : (
                <></>
              )
            )}
          </>
        ) : (
          <>
            {" "}
            <EmailRow
              title="! tip"
              subject="press the user icon to log out"
              description="click + compose for new email"
            />
            <EmailRow
              title="! link to my github"
              subject=":b"
              description="https://github.com/diffim"
            />
            {emails.map((email) =>
              !email.data.isPrivateMessage ? (
                <EmailRow
                  key={email.id}
                  id={email.id}
                  title={email.data.to}
                  subject={email.data.subject}
                  description={email.data.message}
                  image={email.data.image ? email.data.image : undefined}
                  time={new Date(
                    email.data.timestamp?.seconds * 1000
                  ).toUTCString()}
                />
              ) : (
                <></>
              )
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default EmailList;
