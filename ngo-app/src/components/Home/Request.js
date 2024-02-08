import React from "react";
import "../../styles/home.css";
import volunteer from "../../assets/images/volunteer.png";

export default function Request() {
  return (
    <>
      <div className="request_cover">
        <div className="request">
          <img src={volunteer} alt="request" />
          <div>
            <h1>Every Good act is a Charity.<br />
            Let's Make a Difference in the Lives of Others</h1>
          </div>
          <a href="#" className="read">
            JOIN US
          </a>
        </div>
      </div>
    </>
  );
}
