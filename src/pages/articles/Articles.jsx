import React from "react"
import { useLocation } from "react-router-dom"

import ArticleCard from "../../components/article/ArticleCard"
import "./articles.css"

export default function Articles() {
  let [articles, setArticles] = React.useState([])
  let location = useLocation()

  React.useEffect(() => {
    document.title = "Articles |  LilshaQ Income"
    const newArticles = JSON.parse(localStorage.getItem("articles"))
    if (newArticles) {
      setArticles([...newArticles])
    }
  }, [location.pathname])

  return (
    <div className="articles-container">
      {articles.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </div>
  )
}
