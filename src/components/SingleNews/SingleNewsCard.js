import React from "react";
import { useParams } from "react-router-dom";
import './SingleNewsCard.css'

const SingleNewsCards = ({ news }) => {
  const { articleId } = useParams();

  const selectedArticle = news.find((article) => article.id === articleId)

  if (!selectedArticle) {
    return <div>Article not found!</div>
  }

  return (
    <div>
      <p>{selectedArticle.source}</p>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.author}</p>
      <p>{selectedArticle.description}</p>
      <p>{selectedArticle.publishedAt}</p>
      <p>{selectedArticle.url}</p>
    </div>
  )
}

export default SingleNewsCards