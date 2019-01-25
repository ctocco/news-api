import React, { Component } from "react";
import Header from "./Header";
import NewsAPI from "../modules/NewsAPI";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.NewsAPI = new NewsAPI();
  }

  componentDidMount = () => {
    this.NewsAPI.call();
  };

  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
