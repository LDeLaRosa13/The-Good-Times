import "./App.css";
import { useEffect, useState } from "react";
import getNews from "./apiCalls";
import AllNewsCards from "./AllNewsCards";
import { Route, Routes } from "react-router-dom";

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
      </div>
      <Routes>
        <Route path='/' element ={<AllNewsCards news={news} />} />
        <Route path='/article/:articleId' element={<SingleNewsCards />} />
      </Routes>
    </div>
  );
};

export default App;
