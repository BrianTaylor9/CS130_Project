import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/home.css";
import "../styles/donation.css";
import DonationForm from "../components/Donation/DonationForm";
import CampaginCard from "../components/Campaign/CampaginCard";
import Organization from "../components/Donation/Organization";
import { campaigns } from "../data/data";


export default function DonateNow() {

    const {id} = useParams();
    console.log(id)
    const card = campaigns[id]


  return (
    <>
      <div className="donateNow">
        <div className="left_form">
          <DonationForm card={card} />
        </div>

        <div className="campaign left_info">
          <div className="campaignGrid donationGrid">
            <CampaginCard card={card} displayBtn={false}/>
          </div>

          <Organization card={card} />
        </div>
      </div>
    </>
  );
}
