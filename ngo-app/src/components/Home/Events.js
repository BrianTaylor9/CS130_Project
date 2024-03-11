import React from "react";
import "../../styles/home.css";
import EventCard from "../Events/EventCard";
import {events} from '../../data/data';
 
/**
 * Events component showcases a list of upcoming events, aiming to motivate users to participate. 
 * It dynamically generates EventCard components for each event, utilizing data from the 'events' dataset. 
 * This setup allows for easy updates and additions to the list of events as new data becomes available.
 * 
 * @returns {React.ReactElement} A React element displaying a grid of upcoming event cards for user engagement.
 */
function Events() {
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


export default Events