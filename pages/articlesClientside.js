import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import Timestamp from '../components/Timestamp';

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

  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <div>
      <ArticleList articles={articles} />
      {isClient && <Timestamp />}
    </div>
  )
}
