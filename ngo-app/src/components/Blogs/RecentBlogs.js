import React from 'react'
import { articles } from '../../data/data'
import RecentArticle from './RecentArticle'

/**
 * Renders a preview of a recent article, including its image, publication date, and title.
 * This component is used to display a brief highlight of an article on a list of recent articles.
 * 
 * @param {{ id: string, src: string, date: string, title: string }} card - The data for the article to be displayed.
 * @returns {React.ReactElement} - A React element showing a snapshot of a recent article.
 */
function RecentBlogs() {
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

export default RecentBlogs