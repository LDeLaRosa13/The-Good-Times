import News from "../News/News";
import { Link } from "react-router-dom";
import './AllNewsCards.css'

const AllNewsCards = ({ news, search }) => {
  const articles = news
  .filter(news => news.title.toLowerCase().includes(search.toLowerCase()))
  .map((article, index) => (
    <div key={index}>
      <Link 
      to={`/article/${index}`}>{article.title}
      <img className="image" src={article.urlToImage} name="image-poster" alt={article.title}/>
      </Link>
      <News
        source={article.source.id}
        author={article.author}
        content={article.content}
        description={article.description}
        publishedAt={article.publishedAt}
        title={article.title}
        url={article.url}
        urlToImage={article.urlToImage}
      />
    </div>
  ));

  return <div className="all-news">{articles}</div>;
};

export default AllNewsCards;
