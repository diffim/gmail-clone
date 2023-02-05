import {
  AccessTime,
  Add,
  Duo,
  Expand,
  ExpandMore,
  Inbox,
  LabelImportant,
  NearMe,
  Note,
  Person,
  Phone,
  Star,
} from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  openSendMessage,
  selectSendMessageIsOpen,
} from "../features/mailSlice";
import "./css-files/Sidebar.css";
import SidebarOption from "./SidebarOption";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <Button
        onClick={() => dispatch(openSendMessage())}
        className="sidebar_compose"
        sx={{ color: "black" }}
        startIcon={<Add fontSize="large" />}
      >
        Compose
      </Button>

      <div className="sidebar__top">
        <SidebarOption Icon={Inbox} title="Inbox" number={54} selected />
        <SidebarOption Icon={Star} title="Starred" number={20} />
        <SidebarOption Icon={AccessTime} title="Snoozed" number={22} />
        <SidebarOption Icon={LabelImportant} title="Important" number={89} />

        <SidebarOption Icon={NearMe} title="Sent" number={20} />
        <SidebarOption Icon={Note} title="Drafts" number={10} />
        <SidebarOption Icon={ExpandMore} title="More" />
      </div>

      <div className="sidebar__footer">
        <div className="sidebar__footerIcons">
          <IconButton>
            <Person />
          </IconButton>
          <IconButton>
            <Duo />
          </IconButton>
          <IconButton>
            <Phone />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
