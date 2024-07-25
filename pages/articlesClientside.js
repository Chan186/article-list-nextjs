import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';

export default function ClientSideFetching() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}
