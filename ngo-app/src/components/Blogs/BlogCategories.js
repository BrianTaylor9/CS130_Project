import React from "react";
import { categories } from "../../data/data";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { cardActionAreaClasses } from "@mui/material";

// This component renders a list of categories dynamically
export default function BlogCategories() {
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
