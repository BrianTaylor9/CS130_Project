import React from "react";
import "../styles/home.css";
// import LogisticsCard from "../components/Logistics/LogisticsCard";

// DATA
import { logistics } from "../data/data";

export default function LogisticsPage() {
  return (
    <>
      <div className="items events eventpage">
        {/* <p>Ready to help them</p> */}
        <h1 className="header">Logistics Support for Upcomging Events</h1>

        {/* <div className="eventGrid">
          {logistics.map((card) => (
            <LogisticsCard key={card.id} card={card} />
          ))}
        </div> */}
      </div>
    </>
  );
}
