require("dotenv").config();

console.log(process);
class NewsAPI {
  constructor() {
    this.baseURL = "https://newsapi.org/v2/";
    this.endpoints = ["everything", "top-headlines"];

    this.APIKey = "0f89c66f2e8241fb8dc9e5a641163a63";
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
