  export default class APIservice {
    static UpdateArticle(article_id, body) {
      return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token 8332a2563da3f706904869e28b077389bd4eb3dc"
        },
        body: JSON.stringify(body) // Assuming 'body' is a JSON object to be sent as the updated article data
      })
      .then(resp => resp.json());
    }
  
    static insertArticle(body) {
      return fetch(`http://127.0.0.1:8000/articles/`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token 8332a2563da3f706904869e28b077389bd4eb3dc"
        },
        body: JSON.stringify(body) // Assuming 'body' is a JSON object to be sent as the new article data
      })
      .then(resp => resp.json());
    }

    static DeleteArticle(article_id){
        return fetch(`http://127.0.0.1:8000/articles/${article_id}/`, {
            method: 'DELETE',
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Token 8332a2563da3f706904869e28b077389bd4eb3dc"
            },
          })
        }

        static LoginUser(body) {
            return fetch(`http://127.0.0.1:8000/auth/`, {
              method: 'POST',
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(body) // Assuming 'body' is a JSON object to be sent as the new article data
            })
            .then(resp => resp.json());
          }
        
  }
  