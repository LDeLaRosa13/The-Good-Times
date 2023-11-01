import "./App.css";
import { useEffect, useState } from "react";
import getNews from "./apiCalls";
import AllNewsCards from "./AllNewsCards";

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
        {/* <p>THIS IS MY APP</p> */}
      </header>
      <div>
        <AllNewsCards news={news} />
      </div>
    </div>
  );
};

export default App;
