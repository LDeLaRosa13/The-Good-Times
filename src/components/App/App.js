import "./App.css";
import { useEffect, useState } from "react";
import getNews from "../apiCalls";
import AllNewsCards from "../AllNews/AllNewsCards";
import SingleNewsCards from "../SingleNews/SingleNewsCard";
import { Route, Routes, useLocation } from "react-router-dom";
import SearchNews from "../Search/SearchNews";

const App = () => {
  const [news, setNews] = useState([]);
  const [search, setSearch] = useState('')
  const location = useLocation().pathname

  useEffect(() => {
    setSearch('')
  }, [location])

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
        <Route path='/' element ={<AllNewsCards news={news} search={search} />} />
        <Route path='/article/:articleId' element={<SingleNewsCards news={news} />} />
      </Routes>
      <SearchNews setSearch={setSearch}/>
    </div>
  );
};

export default App;
