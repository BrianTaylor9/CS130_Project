import React from "react";
import "../../styles/home.css";
import AboutCard from "./AboutCard";

// DATA
import {about} from '../../data/data';

// About component displays sections from the 'about' data.
export default function About() {
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