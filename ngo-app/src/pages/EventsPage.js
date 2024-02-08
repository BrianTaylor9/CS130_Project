import React from "react";
import "../styles/home.css";
import EventCard from "../components/Events/EventCard";

// DATA
import { events } from "../data/data";

export default function EventsPage() {
  return (
    <>
      <div className="items events eventpage">
        {/* <p>Ready to help them</p> */}
        <h1 className="header">Our Upcomging Events</h1>

        <div className="eventGrid">
          {events.map((card) => (
            <EventCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
