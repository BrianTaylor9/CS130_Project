import React from "react";
import "../../styles/home.css";
import EventCard from "../Events/EventCard";
import {events} from '../../data/data';

export default function Events() {
  return (
    <>
      <div className="items events">
        <p>Ready to help them</p>
        <h1 className="header">Join the Upcomging Events</h1>

        <div className="eventGrid">
          <EventCard card={events[0]} />
          <EventCard card={events[1]} />
          <EventCard card={events[2]} />
        </div>
      </div>
    </>
  );
}
