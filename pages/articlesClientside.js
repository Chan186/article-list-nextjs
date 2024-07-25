import { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import Timestamp from '../components/Timestamp';

export default function ClientSideFetching() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const allPosts = await res.json();

        const getRandomPosts = (posts, numPosts) => {
        const shuffled = posts.sort(() => 0.5 - Math.random()); // Shuffle array
        return shuffled.slice(0, numPosts); 
        };
  
        const randomPosts = getRandomPosts(allPosts, 6);
        setArticles(randomPosts)
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
