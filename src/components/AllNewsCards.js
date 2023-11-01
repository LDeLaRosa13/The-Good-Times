import News from "./News";

const AllNewsCards = ({ news }) => {
  const articles = news.map((news, index) => {
    return (
      <News
      key={index}
      source={news.source.id}
      author={news.author}
      content={news.content}
      description={news.description}
      publishedAt={news.publishedAt}
      title={news.title}
      url={news.url}
      urlToImage={news.urlToImage}
      />
    )
  })

  return (
    <div className="all-news">
      {articles}
    </div>
  )
}



export default AllNewsCards