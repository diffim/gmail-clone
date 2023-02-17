import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { firebaseAuth, firebaseProvider } from "../firebase";
import "./css-files/Login.css";

function Login() {
  const dispatch = useDispatch();

  function signIn() {
    firebaseAuth.signInWithPopup(firebaseProvider).then(({ user }) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoURL: user.photoURL,
        })
      );
    });
  }

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2020%2F11%2FGmail-Logo.png&f=1&nofb=1&ipt=7c58c8064d4aec3ee77ae0d1e239c21d0acb5d5e32964345df19e85fde272bb9&ipo=images"
          alt="gmail"
        />
        <Button variant="contained" color="primary" onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
