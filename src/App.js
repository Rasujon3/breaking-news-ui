import React ,{useEffect,useState} from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import News from './components/News/News';

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(()=>{
    const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=7d13fae055264b1886380a42085c5290';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setArticles(data.articles))
  },[])
  return (
    <div>
      <h2>Headlines : {articles.length}</h2>
      {
      articles.map(article => <News article = {article}></News> )
      }
    </div>
  );
}

export default App;
