import './App.css';
import React, { useState, useEffect } from 'react';
import ArticleList from './components/ArticleList';
import Form from './components/Form';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/Footer';

function App() {
  const [articles, setArticles] = useState([]);
  const [editArticles, setEditArticles] = useState(null);
  const [token, setToken, removeCookie] = useCookies(['mytoken']);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    fetch('http://127.0.0.1:8000/articles/', {
      method: 'GET',
      headers: {
        "Content-Type": 'application/json',
        "Authorization": `Token ${token['mytoken']}`
      }
    })
      .then(resp => resp.json())
      .then(resp => setArticles(resp))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (!token['mytoken']) {
      navigate('/'); // Use navigate() to redirect to the '/' route
    }
  }, [token, navigate]);

  const editBtn = (article) => {
    setEditArticles(article);
  }

  const updatedInformation = (article) => {
    const new_article = articles.map(myArticle => {
      if (myArticle.id === article.id) {
        return article;
      } else {
        return myArticle;
      }
    });

    setArticles(new_article);
  }

  const articleForm = () => {
    setEditArticles({ title: '', description: '' });
  }

  const insertedInformation = (article) => {
    const new_articles = [...articles, article];
    setArticles(new_articles);
  }

  const deleteBtn = (article) => {
    const new_article = articles.filter(myArticle => myArticle.id !== article.id);
    setArticles(new_article);
  }

  const logoutBtn = () => {
    // Use the removeCookie function to clear the 'mytoken'
    removeCookie('mytoken');
    navigate('/'); // Redirect to the '/' route after logging out
  };

  return (
    <div>
      <Header/>
        <div className='row'>
          <div className='col'>
              <button onClick={articleForm} className='btn btn-primary'>Insert Article</button>
              <button onClick={logoutBtn} className='btn btn-primary'>Logout</button>
          </div>
        </div>
        <ArticleList articles={articles} editBtn={editBtn} deleteBtn={deleteBtn} />
        {editArticles ? <Form article={editArticles} updatedInformation={updatedInformation} insertedInformation={insertedInformation} /> : null}
        <Footer/>
      </div>
  );
}

export default App;
