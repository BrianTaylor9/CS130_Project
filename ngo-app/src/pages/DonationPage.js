import React from "react";
import "../styles/home.css";
import "../styles/donation.css";
import CampaginCard from "../components/Campaign/CampaginCard";

// DATA
import { campaigns } from "../data/data";

export default function DonationPage() {
  return (
    <>
      <div className="items campaign donation">
        {/* <div className="upper"></div> */}
        {/* <p>Help the people</p> */}
        <h1 className="header featured">Featured Campaigns</h1>

        <div className="campaignGrid donationGrid">
          {campaigns.map((card) => (
            <CampaginCard key={card.id} card={card} displayBtn={true} />
          ))}
        </div>
      </div>
    </>
  );
}
