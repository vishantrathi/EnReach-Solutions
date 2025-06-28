import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('/data/articles.json')
      .then(res => res.json())
      .then(data => setArticles(data))
      .catch(err => console.error('Error loading articles:', err));
  }, []);

  return (
    <section className="articles-page">
      <div className="container">
        <h1 className="articles-heading">Latest Articles from Enreach Solution</h1>
        <div className="article-grid">
          {articles.map(article => (
            <div key={article.id} className="article-card">
              <img src={article.image} alt={article.title} className="article-img" />
              <div className="article-body">
                <h2 className="article-title">{article.title}</h2>
                <p className="article-excerpt">{article.excerpt}</p>
                <Link to={`/article/${article.id}`} className="article-link">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
