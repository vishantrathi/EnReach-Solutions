import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch('/data/articles.json')
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((a) => a.id === parseInt(id));
        setArticle(found);
        if (found) document.title = `${found.title} | Enreach Solution`;
      });
  }, [id]);

  if (!article) return <div className="p-8">Loading...</div>;

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <img src={article.image} alt={article.title} className="w-full h-64 object-cover rounded" />
      <h1 className="text-3xl font-bold mt-4">{article.title}</h1>
      <p className="text-gray-500 mt-2">Published on {article.publishedDate} | Location: {article.location}</p>
      <p className="mt-4 text-lg leading-relaxed">{article.content}</p>
    </div>
  );
};

export default Article;
