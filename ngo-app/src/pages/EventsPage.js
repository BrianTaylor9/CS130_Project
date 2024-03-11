import React, { useEffect, useContext, useCallback } from "react";
import "../styles/home.css";
import EventCard from "../components/Events/EventCard";
import Axios from "axios";
import { LoadingContext } from "../utils/LoadingContext";
import LoaderComp from "../components/LoaderComp";

// DATA
// import { events } from "../data/data";

const {
  REACT_APP_IS_PROD,
  REACT_APP_VERCEL_URL,
  REACT_APP_EVENTS_URL,
  REACT_APP_LOCALHOST_URL,
} = process.env;

const URL = REACT_APP_IS_PROD ? REACT_APP_VERCEL_URL : REACT_APP_LOCALHOST_URL;
console.log(`${URL}${REACT_APP_EVENTS_URL}`);

export default function EventsPage() {
  const [events, setList] = React.useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const fectchData = useCallback(() => {
    setIsLoading(true);
    Axios.get(`${URL}${REACT_APP_EVENTS_URL}`).then((res) => {
      setList(res.data);
    });
    if (events.length > 1) {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    fectchData();
    // console.log(events);
  }, [isLoading, events]);

  sessionStorage.setItem("events", JSON.stringify(events));

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
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
      )}
    </>
  );
}
