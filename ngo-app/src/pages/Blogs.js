import React from "react";
import "../styles/home.css";
import ArticleCard from "../components/Articles/ArticleCard";

// DATA
import { articles } from "../data/data";

export default function Blogs() {
  return (
    <>
      <div className="items article blog">
        {/* <p>Ready to help them</p> */}
        <h1 className="header featured">Articles & Blogs</h1>

        <div className="articleGrid blogGrid">
          {articles.map((card) => (
            <ArticleCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
