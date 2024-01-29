import React from "react";
import "../../styles/home.css";
import ArticleCard from "../Articles/ArticleCard";
// DATA
import { articles } from "../../data/data";

export default function Aticles() {
  return (
    <>
      <div className="items article">
        <h1 className="header featured">Articles & News </h1>

        <div className="articleGrid">
          {/* {articles.map((card) => (
              <Item card={card} />
            ))} */}
          <ArticleCard card={articles[0]} />
          <ArticleCard card={articles[1]} />

          <div className="articleCard2">
            <div className="box">
              <span className="date2">13 Mar</span>
              <h2>Start a Fundraiser for Yourself</h2>
              <p>Lorem verf rger g rgr gre g3er g3 34t3 efwe greg f4</p>
            </div>

            <div className="box">
              <span className="date2">10 Apr</span>
              <h2>Help us wirth an event. Connect</h2>
              <p>Lorem verf rger g rgr gre g3er g3 34t3 efwe greg f4</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
