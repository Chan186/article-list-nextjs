import ArticleList from '../components/ArticleList';
import Timestamp from '../components/Timestamp';
import { useState, useEffect } from 'react'

export default function IncrementalStaticRegeneration({ articles }) {
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

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
    revalidate: 1, 
  };
}
