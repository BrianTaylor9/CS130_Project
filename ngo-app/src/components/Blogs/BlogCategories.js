import React from "react";
import { categories } from "../../data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { cardActionAreaClasses } from "@mui/material";

/**
 * BlogCategories component renders a list of article categories dynamically from the provided 'categories' data.
 * Each category is rendered as a clickable element that leads to the respective category page.
 *
 * @returns {React.ReactElement} - A React element that displays a list of blog categories.
 */
function BlogCategories() {
  return (
    <div className="blogCat">
      <h1 className="blogHeader">Categories</h1>

      <div>
        {categories.map((cat) => (
          <a key={cat.id}  href={cat.name}>
            <div className="cat_item">
              <span>{cat.name}</span>
              <ArrowForwardIosIcon className="arrow" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default BlogCategories