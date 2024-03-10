import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import RemoveRedEyeSharpIcon from "@mui/icons-material/RemoveRedEyeSharp";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import AccessTimeSharpIcon from "@mui/icons-material/AccessTimeSharp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

/**
 * Renders a summary card for an event with information and interaction options.
 * The card displays the event's image, category, date, location, and time. It also offers
 * links for users to join the event or view more details.
 * 
 * @param {{ card: { id: string, src: string, field: string, date: string, title: string, location: string, time: string }}} props - The properties passed to the component.
 * @param {Object} props.card - The event data to be displayed in the card.
 * 
 * @returns {React.ReactElement} The event summary card component.
 */
function EventCard({ card }) {

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

export default EventCard