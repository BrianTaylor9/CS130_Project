import React, {useEffect} from "react";
import "../styles/home.css";
import EventCard from "../components/Events/EventCard";
import Axios from 'axios';

// DATA
import { events } from "../data/data";

export default function EventsPage() {

  const [events, setList] = React.useState([]);
  useEffect(()=> {  
    Axios.get('http://localhost:4000/api/events')
    .then((res)=> setList(res.data));}, []);
  sessionStorage.setItem('events', JSON.stringify(events));

  return (
    <>
      <div className="items events eventpage">
        {/* <p>Ready to help them</p> */}
        <h1 className="header">Our Upcoming Events</h1>

        <div className="eventGrid">
          {events.map((card) => (
            <EventCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
