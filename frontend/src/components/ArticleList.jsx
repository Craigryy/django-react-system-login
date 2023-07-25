import React from "react";

function ArticleList(props) {
  const editBtn = (article) => {
    // Call the editBtn function passed as a prop, and pass the clicked article as an argument
    props.editBtn(article);
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
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>

            <hr className="hrclass" />
          </div>
        ))}
    </div>
  );
}

export default ArticleList;
