import React from "react";
import { Link } from "react-router-dom";
import "./Categories.css";

/**
 * @param {object} props
 * @param {string[]} props.categories - An array of unique category names
 */
function Categories({ categories }) {
  return (
    <section className="categories-container">
      <h2 className="categories-title">All Categories</h2>
      <div className="categories-list">
        {categories.map((cat) => (
          <Link 
            key={cat} 
            to={`/categories/${cat}`} 
            className="category-pill"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
