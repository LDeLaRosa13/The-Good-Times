import React from "react";
import { useParams } from "react-router-dom";
import './SingleNewsCard.css'

const SingleNewsCards = ({ news }) => {
  const { articleId } = useParams();

  const selectedArticle = news[articleId]

  if (!selectedArticle) {
    return <div>Article not found!</div>
  }
  
  return (
    <div>
      <h2>{selectedArticle.title}</h2>
      <p>{selectedArticle.author}</p>
      <p>{selectedArticle.description}</p>
      <p>{selectedArticle.publishedAt}</p>
    </div>
  )
}

export default SingleNewsCards