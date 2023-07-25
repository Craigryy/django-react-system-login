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
  const updatedInformation =(article) => {
    const new_article = articles.map(myArticle=>{
      if(myArticle.id === article.id){
        return article ;
      }
      else {
        return myArticle ;
      }
    })

    setArticles(new_article)

  }

  const articleForm = () =>{
    setEditArticles({title:'', description:''})

     
  }

  const insertedInformation =(article) =>{
    const new_articles = [...articles,article]
    setArticles(new_articles)

  }

  const deleteBtn = (article)=>{
    const new_article = articles.filter(myArticle =>{
      if(myArticle.id === article.id){
        return false;
      }
      else{
        return true;
      }
   
    })

    setArticles(new_article)

  }

  return ( 
    <div className="App">
  <div className='row'>
    <div className='col'>
    <div className=" align-items-center"> {/* Add a div with 'd-flex' and 'align-items-center' classes */}
        <h2>Welcome to my Article </h2>
        <br/>
        <button onClick={articleForm} className='btn btn-primary'>Insert Article</button>
      </div>
      <br/>
      <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn}/>
      {editArticles ? <Form article={editArticles} updatedInformation={updatedInformation} insertedInformation={insertedInformation}/> : null}
    </div>
  </div>
</div>
  );
}

export default App; 
