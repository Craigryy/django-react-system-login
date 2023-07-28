import React from "react";
import APIservice from "../APIService";
import { useCookies } from 'react-cookie';

function ArticleList(props) { 
  
  const [token] = useCookies(['mytoken']);

  const editBtn = (article) => {
    // Call the editBtn function passed as a prop and pass the clicked article as an argument
    props.editBtn(article);
  };

  const deleteBtn = (article) => {
    // Show a confirmation dialog before proceeding with the deletion
    const isConfirmed = window.confirm("Are you sure you want to delete this article?");

    if (isConfirmed) {
      APIservice.deleteArticle(article.id, token['mytoken'])
        .then(() => props.deleteBtn(article))
        .catch((error) => {
          // Handle error (optional)
          console.error('Error deleting article:', error);
          // Add any error handling you want here.
        });
    }
  };
  
  return (
    <div>
      {props.articles &&
        props.articles.map(article => (
          <div key={article.id}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>

            <div className="row">
              <div className="col-md-1">
                <button className="btn btn-primary" onClick={() => editBtn(article)}>
                  Update
                </button>
              </div>

              <div className="col">
                <button onClick={()=>deleteBtn(article)} className="btn btn-danger">
                  Delete
                  </button>
              </div>
            </div>

            <hr className="hrclass" />
          </div>
        ))}
    </div>
  );
}

export default ArticleList;
