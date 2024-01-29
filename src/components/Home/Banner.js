import React from "react";
import rightPic from "../../assets/images/rightPic.png";
import bannerLight from "../../assets/images/bannerLight.png";

import "../../styles/banner.css";

export default function Banner() {
  return (
    <>
      <div className="banner">
        <img src={rightPic} className="rightpic" alt="rightpic" />
        <img src={bannerLight} className="bannerLight" alt="bannerLight" />

        <div className="banner_txt">
          <p>Help people in need</p>
          <h1>Lend a helping hand and get involved..</h1>
          <a href="/events">Explore</a>
          <a href="/donate">Donate</a>
        </div>
      </div>
    </>
  );
}
