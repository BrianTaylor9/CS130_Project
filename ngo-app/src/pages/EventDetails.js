import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/home.css";
import "../styles/donation.css";
import "../styles/events.css";
import EventDesc from "../components/Events/EventDesc";

import EventInfo from "../components/Events/EventInfo";
import Location from "../components/Events/Location";
import { events } from "../data/data";

export default function EventDetails() {
  const { id } = useParams();
  const events = sessionStorage.getItem("events");
  // const [card, setCard] = useState(articles[id]);
  const card = (new Map(Object.entries(JSON.parse(events)))).get(id);
  console.log(card);

  //   useEffect(async () => {
  //     const card = events[id];
  // setCard(events[id]);
  // console.log(card);
  //   }, []);

  return (
    <>
      <div className="donateNow eventDetails">
        <div className="banner2">
          <p className="date">{card.date}</p>
          <img src={card.src} alt={card.title} />
        </div>
        <div className="left_form">
          <EventDesc card={card} />
        </div>

        <div className="campaign left_info">
          <div className="campaignGrid donationGrid">
            <EventInfo card={card} />
          </div>
          <Location id={card.orgId} />
        </div>
      </div>
    </>
  );
}
