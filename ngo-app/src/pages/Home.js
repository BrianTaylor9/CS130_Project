import React from "react";
import Banner from "../components/Home/Banner";
import Testimony from "../components/Home/Testimony";
import About from "../components/Home/About";
import Campaigns from "../components/Home/Campaigns";
import BeVolunteer from "../components/Home/BeVolunteer";
import Article from "../components/Home/Articles";
import Request from "../components/Home/Request";
import Collage from "../components/Home/Collage";
import Events from "../components/Home/Events";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Collage />
      <Events />
      <BeVolunteer />
      <Campaigns />
      <Testimony />
      <Article />
      <Request />
      {/* <DonationGrid />  */}
    </>
  );
}
