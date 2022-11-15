import React, { useState, useEffect } from "react"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./articleCard.css"
import { useLocation } from "react-router-dom"

export default function ArticleCard(props) {
  let [currentArticle, setCurrentArticle] = useState(props?.article)
  let [articles, setArticles] = useState([])
  let location = useLocation()

  const onClickHandler = () => {
    let updateArticleIndex = articles.findIndex(
      (art) => art?.title === props?.article?.title
    )
    let updateArticle = articles[updateArticleIndex]

    if (updateArticle.liked) {
      updateArticle = {
        ...updateArticle,
        liked: false,
        nLikes: updateArticle?.nLikes - 1,
      }
    } else {
      updateArticle = {
        ...updateArticle,
        liked: true,
        nLikes: +updateArticle?.nLikes + 1,
      }
    }
    let newArticles = [...articles]
    newArticles[updateArticleIndex] = updateArticle
    setCurrentArticle((prev) => ({ ...updateArticle }))
    localStorage.removeItem("articles")
    localStorage.setItem("articles", JSON.stringify(newArticles))
    getNewArticles()
  }

  const getNewArticles = () => {
    const newArticles = JSON.parse(localStorage.getItem("articles"))
    setArticles(newArticles)
  }

  useEffect(() => {
    getNewArticles()
  }, [location.pathname])

  if (!currentArticle?.title) return <p className="loading">Loading...</p>

  return (
    <div className="article-card">
      <img
        src={currentArticle?.image}
        alt="article"
        className="article-image"
        loading="lazy"
      />
      <div className="article-actions">
        <div className="article-title-container">
          <p className="article-title">{currentArticle?.title}</p>
          <button
            className="article-icon"
            style={{
              color: currentArticle?.liked ? "rgb(25, 161, 25)" : "black",
            }}
            onClick={onClickHandler}
          >
            <FontAwesomeIcon icon={faHeart} /> {currentArticle?.nLikes}
          </button>
        </div>
      </div>
    </div>
  )
}
