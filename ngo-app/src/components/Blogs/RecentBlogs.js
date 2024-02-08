import React from 'react'
import { articles } from '../../data/data'
import RecentArticle from './RecentArticle'

export default function RecentBlogs() {
  return (
    <>
      <div className="recentBLog">
        <RecentArticle card={articles[0]} />
        <RecentArticle card={articles[1]} />
        <RecentArticle card={articles[2]} />

      </div>
    </>
  );
}
