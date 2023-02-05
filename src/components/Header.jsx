import {
  Apps,
  ArrowDropDown,
  DarkMode,
  LightMode,
  Menu,
  Notifications,
  Search,
} from "@mui/icons-material";
import { Avatar, IconButton, MenuList } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deselectDarkMode,
  selectDarkMode,
  selectOpenDarkMode,
} from "../features/darkModeSlice";
import { logout, selectUser } from "../features/userSlice";
import { firebaseAuth } from "../firebase";
import "./css-files/Header.css";

function Header() {
  const user = useSelector(selectUser);
  const darkMode = useSelector(selectOpenDarkMode);

  const dispatch = useDispatch();

  function signOut() {
    firebaseAuth.signOut().then(() => {
      dispatch(logout());
    });
  }

  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <Menu />
        </IconButton>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogodownload.org%2Fwp-content%2Fuploads%2F2018%2F03%2Fgmail-logo.png&f=1&nofb=1&ipt=a57582b93fc8a111fbb39da1a30bd0ededea10a8051bdb64ef74b472d42fe991&ipo=images"
          alt=""
          className=""
        />
      </div>

      <div className="header__middle">
        <Search color="gray" />
        <input placeholder="Search mail" type="text" autoCorrect="false" />
        <ArrowDropDown className="header_inputCaret" />
      </div>
      <div className="header__right">
        {darkMode ? (
          <IconButton onClick={() => dispatch(deselectDarkMode())}>
            <LightMode className="pulse" />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(selectDarkMode())}>
            <DarkMode className="pulse" />
          </IconButton>
        )}

        <IconButton>
          <Notifications />
        </IconButton>
        <Avatar
          sx={{ width: 30, height: 30, cursor: "pointer" }}
          src={user?.photoURL}
          onClick={signOut}
        />
      </div>
    </div>
  );
}

export default Header;
