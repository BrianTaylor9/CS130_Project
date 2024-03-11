import React from "react";
import "../../styles/home.css";
import ArticleCard from "../Articles/ArticleCard";
// DATA
import { articles } from "../../data/data";

/**
 * Renders a curated list of articles and news pieces. This component showcases a selection
 * of articles from the provided data, along with specialized content cards.
 * 
 * It displays the articles in a grid layout, highlighting featured articles and news
 * items to engage the website's visitors with the latest updates and informative content.
 *
 * @returns {React.ReactElement} A React element containing the articles grid, featured articles, and news sections.
 */
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
