import React from "react";
import "./css-files/Section.css";

function Section({ title, color, Icon, selected }) {
  return (
    <div
      className={`section ${selected && "section-selected"}`}
      style={{
        color: `${selected && color}`,
        borderBottom: `3px solid ${color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
}

export default Section;
