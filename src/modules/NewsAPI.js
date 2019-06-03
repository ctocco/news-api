require("dotenv").config();

console.log(process);
class NewsAPI {
  constructor() {
    this.baseURL = "https://newsapi.org/v2/";
    this.endpoints = ["everything", "top-headlines"];

    this.APIKey = process.env.NEWS_API_KEY;
  }

  async call() {
    let res = await fetch(
      `${this.baseURL}top-headlines?country=us&apiKey=${this.APIKey}`
    );
    const result = await res.json();
    console.log(result.articles);
  }
}

export default NewsAPI;
