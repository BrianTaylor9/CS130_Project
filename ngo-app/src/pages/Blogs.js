import React, { useEffect } from "react";
import "../styles/home.css";
import ArticleCard from "../components/Articles/ArticleCard";
import Axios from 'axios';

// DATA
import { articles } from "../data/data";

export default function Blogs() {
  
  const [list, setList] = React.useState([]);
  useEffect(()=> {  
    Axios.get('http://localhost:4000/api/articles')
    .then((res)=> setList(res.data));}, []);
  sessionStorage.setItem('articles', JSON.stringify(list));

  return (
    <>
      <div className="items article blog">
        {/* <p>Ready to help them</p> */}
        <h1 className="header featured">Articles & Blogs</h1>

        <div className="articleGrid blogGrid">
          {list.map((card) => (
            <ArticleCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </>
  );
}
