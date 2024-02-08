import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

export default function EventCard({ card }) {

  const href = `/event/${card.id}`
  return (
    <a href={href}>
      <div className="eventCard">
        <div className="img">
          <img src={card.src} alt="img" />
          <span className={card.field}>{card.field}</span>
          <p className="date">{card.date}</p>
        </div>

        <h2>{card.title}</h2>
        <div className="details">
          <p className="det location">
            <LocationOnSharpIcon sx={{ pr: "5px", fontSize: "20px" }} />

            <span>{card.location}</span>
          </p>
          <p className="det time">
            <AccessTimeSharpIcon sx={{ pr: "5px", fontSize: "20px" }} />
            <span>{card.time}</span>
          </p>
        </div>

        <div className="action_btns">
          <a href={href} className="read join">
            <GroupAddIcon sx={{ pr: "5px" }} />
            <span>JOIN</span>
          </a>
          <a href={href} className="read view">
            <RemoveRedEyeSharpIcon sx={{ pr: "5px" }} />
            <span>VIEW</span>
          </a>
        </div>
      </div>
    </a>
  );
}
