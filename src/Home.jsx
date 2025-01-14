// Home.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Home.css";

function Home({ articles }) {
  const { categoryName } = useParams(); 
  // categoryName is undefined if we’re on "/", 
  // or "Tech" (for example) if we’re on "/categories/Tech".

  // Filter articles if there's a category param
  const displayedArticles = categoryName
    ? articles.filter((article) => 
        article.categories.includes(categoryName)
      )
    : articles;

  const handleReadMore = (id) => {
    const foundArticle = articles.find((a) => a.id === id);
    //alert(`Navigate to full article ID: ${id}`);
    if (foundArticle && foundArticle.link) {
      window.location.href = foundArticle.link;
    }
  };

  // Optional: Change the heading text based on presence of categoryName
  const headingText = categoryName
    ? `Articles in “${categoryName}”`
    : "Microbiome Systems Ecology & Evolution";

  return (
    <section className="cyber-container">
      <h1 className="cyber-header">{headingText}</h1>
      <div className="articles-list">
        {displayedArticles.map((article) => (
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
            <p className="article-authors">{article.authors}</p>

            {/* Category pills */}
            <div className="article-categories">
              {article.categories.map((cat) => (
                <Link
                  key={cat}
                  to={`/categories/${cat}`}
                  className="category-pill-home"
                  onClick={(e) => e.stopPropagation()}
                >
                  {cat}
                </Link>
              ))}
            </div>

            <button
              className="read-more-button"
              onClick={(e) => {
                e.stopPropagation();
                handleReadMore(article.id);
              }}
            >
              full text
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;
