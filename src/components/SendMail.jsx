import { Close } from "@mui/icons-material";
import { Button, IconButton, Switch, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  closeSendMessage,
  openSendMessage,
  selectSendMessageIsOpen,
} from "../features/mailSlice";
import { firebaseDb } from "../firebase";
import "./css-files/SendMail.css";
import firebase from "firebase/compat";

function SendMail() {
  const dispatch = useDispatch();
  const [privateMessage, setPrivateMessage] = useState(false);
  const [minimizeSendMail, setMinimizeSendMail] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(formData) {
    firebaseDb.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      image: formData.image,
      isPrivateMessage: privateMessage,

      //this basically means change the time it was sent dynamically based on the users timezone that they currently reside in
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    //this closes the mailsend thingy
    dispatch(closeSendMessage());
  }

  return (
    <div
      className={`   sendMail ${
        minimizeSendMail ? "sendMail__open" : "sendMail__minimized"
      }`}
    >
      <div
        className="sendMail__header"
        onClick={() => setMinimizeSendMail(!minimizeSendMail)}
      >
        <h3>New Message</h3>{" "}
        <IconButton>
          <Close
            onClick={() => dispatch(closeSendMessage())}
            className="sendMail__close "
          />
        </IconButton>
      </div>

      {/*   this handleSubmit is taken from the useForm.
            it takes a function as a parameter and then
            gives the forms data to the functions first callback 
            
        */}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input__container">
          <input
            name="to"
            type="email"
            autoComplete="off"
            placeholder="To"
            {...register("to", { required: "To is required" })}
          />

          {errors.to && (
            <p className="sendMail__errorMessage">{errors.to.message}</p>
          )}
        </div>

        <div className="input__container">
          <input
            name="subject"
            autoComplete="off"
            type="text"
            placeholder="Subject"
            {...register("subject", { required: "Subject is required" })}
          />

          {errors.subject && (
            <p className="sendMail__errorMessage">{errors.subject.message}</p>
          )}
        </div>

        <div className="input__container">
          <input
            name="image"
            type="text"
            autoComplete="off"
            placeholder="Image url (optional)"
            {...register("image")}
          />
        </div>
        <div className="input__container sendMail__message">
          <input
            name="message"
            type="text"
            autoComplete="off"
            placeholder="message"
            {...register("message", { required: "Message is required" })}
            className="sendMail__message"
          />

          {errors.message && (
            <p className="sendMail__errorMessage ">{errors.message.message}</p>
          )}
        </div>
        <div className="sendMail__options">
          <Button className="sendMail__send" variant="contained" type="submit">
            Send
          </Button>
          <div className="flex">
            <Typography
              fontSize={"small"}
              color={privateMessage ? "#4b90ff" : "white"}
            >
              Private Message
            </Typography>
            <Switch
              checked={privateMessage}
              onClick={(e) => setPrivateMessage(e.target.checked)}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
