import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/home.css";
import "../styles/donation.css";
import "../styles/events.css";
import '../styles/blogs.css'
import BlogDesc from "../components/Blogs/BlogDesc";
import BlogCategories from "../components/Blogs/BlogCategories";
import RecentBlogs from "../components/Blogs/RecentBlogs";

import { articles } from "../data/data";

export default function BlogDetails() {
  const { id } = useParams();
  const [card, setCard] = useState(articles[id]);
  console.log(card);

  //   useEffect(async () => {
  //     const card = events[id];
  // setCard(events[id]);
  // console.log(card);
  //   }, []);

  return (
    <>
      <div className="donateNow eventDetails">
        <div className="banner2">
          <p className="date">{card.date}</p>
          <img src={card.src} alt={card.title} />
        </div>
        <div className="left_form">
          <BlogDesc card={card} />
        </div>

        <div className="campaign blog left_info">
          <RecentBlogs/>
          <BlogCategories/>
        </div>
      </div>
    </>
  );
}
