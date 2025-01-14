// Archives.jsx
import React from "react";
import "./Archives.css";

function Archives({ articles }) {
  // 1) Sort articles by date (newest first, or oldest first—your choice)
  const sortedArticles = [...articles].sort((a, b) => {
    // If you want newest first, swap b and a
    return new Date(b.date) - new Date(a.date);
  });

  // 2) Handle click to navigate
  const handleArticleClick = (id) => {
    const foundArticle = sortedArticles.find((art) => art.id === id);
    if (foundArticle && foundArticle.link) {
      window.location.href = foundArticle.link;
    } else {
      console.warn(`No link found for article ID: ${id}`);
    }
  };

  return (
    <section className="archives-container">
      <h2 className="archives-title">Archives</h2>
      <div className="timeline">
        {sortedArticles.map((article) => (
          <div key={article.id} className="timeline-item">
            {/* Date on the left */}
            <div className="timeline-date">
              {article.date}
            </div>

            {/* Article title on the right */}
            <div 
              className="timeline-article"
              onClick={() => handleArticleClick(article.id)}
            >
              {article.title}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Archives;
