import React from 'react'
import { articles } from '../../data/data'
import RecentArticle from './RecentArticle'

// RecentBlogs component fetches and displays a list of recent articles from session storage.
export default function RecentBlogs() {
  const articleString = sessionStorage.getItem("articles");
  const articles = new Map(Object.entries(JSON.parse(articleString)));
  console.log(articles.get('0'));
  return (
    <>
      <div className="recentBLog">
        <RecentArticle card={articles.get('0')} />
        <RecentArticle card={articles.get('1')} />
        <RecentArticle card={articles.get('2')} />

      </div>
    </>
  );
}
