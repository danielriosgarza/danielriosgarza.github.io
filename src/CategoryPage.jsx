// CategoryPage.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./Home.css"; // or separate CSS if you want

function CategoryPage({ articles }) {
  const { categoryName } = useParams();

  const filteredArticles = articles.filter((article) =>
    article.categories.includes(categoryName)
  );

  const handleReadMore = (id) => {
    // 1. Find the article by matching the ID
    const foundArticle = articles.find((article) => article.id === id);

    // 2. (Optional) Alert the user (you can remove if you prefer)
    alert(`Navigate to full article ID: ${id}`);

    // 3. If there's a link, redirect the current window
    if (foundArticle && foundArticle.link) {
      window.location.href = foundArticle.link;
    } else {
      // e.g. no link found
      console.warn("No link found for article ID:", id);
    }
  };


  return (
    <section className="cyber-container">
      <h1 className="cyber-header">Articles in “{categoryName}”</h1>
      <div className="articles-list">
        {filteredArticles.map((article) => (
          <article
            key={article.id}
            className="article-card"
            onClick={() => handleReadMore(article.id)}
          >
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>

            {/* Show categories again if desired */}
            <div className="article-categories">
              {article.categories.map((cat) => (
                <span key={cat} className="category-tag">
                  {cat}
                </span>
              ))}
            </div>

            <button
              className="read-more-button"
              onClick={(e) => {
                e.stopPropagation();
                handleReadMore(article.id);
              }}
            >
              Read More
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CategoryPage;
