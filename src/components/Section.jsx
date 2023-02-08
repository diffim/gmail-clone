import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./css-files/Section.css";

function Section({ title, color, Icon, selected, link, disabled }) {
  return (
    <NavLink
      to={link}
      // className={`section ${isActive && "section-selected"}`}
      className={({ isActive }) =>
        isActive && !disabled ? "section-selected section" : "section"
      }
      style={{
        color: `${selected && color}`,
        borderBottom: `3px solid ${color}`,
      }}
    >
      <Icon />
      <h4 style={{ color: "gray" }}>{title}</h4>
    </NavLink>
  );
}

export default Section;
