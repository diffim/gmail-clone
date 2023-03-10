import React from "react";
import "./css-files/SidebarOption.css";

function SidebarOption({ title, number, Icon, selected }) {
  return (
    <div className={`sidebarOption  ${selected && "sidebar--active"} `}>
      <Icon />
      <h3 className="darkbg">{title}</h3>
      <p className="darkbg">{number}</p>
    </div>
  );
}

export default SidebarOption;
