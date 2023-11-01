import News from "../News/News";
import { Link } from "react-router-dom";

const AllNewsCards = ({ news }) => {
  const articles = news.map((article, index) => (
    <div key={index}>
      <Link to={`/article/${index}`}>{article.title}</Link>
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
