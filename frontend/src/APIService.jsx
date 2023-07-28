export default class APIservice {
    static async makeRequest(url, method, body = null, token = null) {
      const headers = {
        "Content-Type": "application/json",
      };
  
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
  
      const requestOptions = {
        method,
        headers,
      };
  
      if (body) {
        requestOptions.body = JSON.stringify(body);
      }
  
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      return data;
    }
  
    static async UpdateArticle(article_id, body, token) {
      const url = `http://127.0.0.1:8000/articles/${article_id}/`;
      return this.makeRequest(url, "PUT", body, token);
    }
  
    static async insertArticle(body, token) {
      const url = "http://127.0.0.1:8000/articles/";
      return this.makeRequest(url, "POST", body, token);
    }
  
    static async DeleteArticle(article_id, token) {
      const url = `http://127.0.0.1:8000/articles/${article_id}/`;
      return this.makeRequest(url, "DELETE", null, token);
    }
  
    static async LoginUser(body) {
      const url = "http://127.0.0.1:8000/auth/";
      return this.makeRequest(url, "POST", body);
    }
  
    static async RegisterUser(body) {
      const url = "http://127.0.0.1:8000/users/";
      return this.makeRequest(url, "POST", body);
    }
  }