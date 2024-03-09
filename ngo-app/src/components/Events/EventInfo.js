import React from 'react'

// EventInfo component provides detailed information about an event including category, date, timings, contact, venue, and mode.
export default function EventInfo({card}) {
  return (
    <>
      <div className="info">
        <div className="item">
          <h4>Category</h4>
          <p className="info_det">{card.field}</p>
        </div>
        <div className="item">
          <h4>Date</h4>
          <p className="info_det">{card.date}</p>
        </div>
        <div className="item">
          <h4>Timings</h4>
          <p className="info_det">{card.time}</p>
        </div>
        <div className="item">
          <h4>Contact</h4>
          <p className="info_det">{card.contact}</p>
        </div>
        <div className="item">
          <h4>Venue</h4>
          <p className="info_det">{card.location}</p>
        </div>
        <div className="item">
          <h4>Mode</h4>
          <p className="info_det">{card.isOffline? `Physical`:`Virtual`}</p>
        </div>
      </div>
    </>
  );
}
