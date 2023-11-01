import "./App.css";
import { useEffect, useState } from "react";
import getNews from "./apiCalls";
import AllNewsCards from "./AllNewsCards";
import { Router } from "react-router-dom";

const App = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    getNews().then((data) => {
      setNews(data.articles);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>THE GOOD TIMES</p>
      </header>
      <div>
        <AllNewsCards news={news} />
      </div>
    </div>
  );
};

export default App;
