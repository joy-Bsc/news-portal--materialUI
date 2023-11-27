import logo from './logo.svg';
import './App.css';
import News from './components/news/News';
import { useEffect, useState } from 'react';
function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/everything?q=apple&from=2023-08-09&to=2023-08-09&sortBy=popularity&apiKey=17d52c8467b3434db77f5da60b53de18';
    fetch(url)
    .then(res => res.json())
    .then(data=>setArticles(data.articles))

  },[]);
  return (
    <>
    <h2>Headlines:{articles.length}</h2>
    {
      articles.map(article => <News article={article}></News>)
    }
    
    </>
  );
}

export default App;
