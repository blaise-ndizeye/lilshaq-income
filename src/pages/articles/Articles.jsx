import React from "react"
import { useLocation } from "react-router-dom"
import Masonry from "react-masonry-css"

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

  const breakPointsObj = {
    default: 3,
    3000: 4,
    2000: 3,
    1000: 2,
    650: 1,
  }

  // return (
  //   <div className="articles-container">
  //     {articles.map((article, index) => (
  //       <ArticleCard key={index} article={article} />
  //     ))}
  //   </div>
  // )
  return (
    <Masonry
      className="articles-container"
      columnClassName="article-card"
      breakpointCols={breakPointsObj}
    >
      {articles?.map((article, index) => (
        <ArticleCard key={index} article={article} />
      ))}
    </Masonry>
  )
}
