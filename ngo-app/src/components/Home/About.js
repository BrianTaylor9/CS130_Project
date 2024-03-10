import React from "react";
import "../../styles/home.css";
import AboutCard from "./AboutCard";

// DATA
import {about} from '../../data/data';

/**
* Renders the "About" section of the website using data to display multiple "AboutCard" components.
* This component pulls information from the 'about' data object and dynamically generates a grid of cards
* that describe various aspects of what the organization or website does.
*
* @returns {React.ReactElement} A React element containing a grid of "AboutCard" components that describe the organization or website.
*/
function About() {
  return (
    <>
      <div className="items about">
        <h1 className="header">What we do?</h1>

        <div className="aboutGrid">
          {about.map((card) => (
            <AboutCard card={card} />
          ))}
        </div>
      </div>
    </>
  );
}

export default About