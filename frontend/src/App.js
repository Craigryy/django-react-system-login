import './App.css';
import { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticles, setEditArticles] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/articles/', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": "Token 8332a2563da3f706904869e28b077389bd4eb3dc"
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error));
  }, []);
  
  const editBtn = (article) => {
    setEditArticles(article)

  }

  return ( 
    <div className="App">
      <h1>HELLO WORLD</h1>
      <br/>
      <ArticleList articles= {articles} editBtn = {editBtn}/>
      {editArticles ? <Form article ={editArticles}/> : null}
      
    </div> 
  );
}

export default App; 
