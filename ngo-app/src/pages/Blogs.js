import React, { useEffect, useContext, useCallback } from "react";
import "../styles/home.css";
import ArticleCard from "../components/Articles/ArticleCard";
import Axios from "axios";
import { LoadingContext } from "../utils/LoadingContext";
import LoaderComp from "../components/LoaderComp";

// DATA
import { articles } from "../data/data";

export default function Blogs() {
  const [list, setList] = React.useState([]);
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  const fectchData = useCallback(() => {
    setIsLoading(true);
    Axios.get("http://localhost:4000/api/blogs").then((res) => {
      setList(res.data);
    });

    if (list.length > 1) {
      setIsLoading(false);
    }
  });

  useEffect(() => {
    fectchData();
    // console.log(list);
  }, [isLoading, list]);

  sessionStorage.setItem("articles", JSON.stringify(list));

  return (
    <>
      {isLoading ? (
        <LoaderComp />
      ) : (
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
      )}
    </>
  );
}
