import React from "react";

export default function News(props) {
  const { article } = props;

  return (
    <div className="News">
      <div className="news-img">
        {article.urlToImage !== null ? (
          <img src={article.urlToImage} alt={article.title} />
        ) : (
          <img
            src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"
            alt="Default"
          />
        )}
      </div>
      <h1>{article.title}</h1>
      <p>
        {article.description?.substring(0, 100).concat("...")}
        <a href={article.url} target={"_blank"} rel="noopener noreferrer">
          {" "}
          Read More
        </a>
      </p>

      <div className="source">
        <p> Author: {article.author}</p>
        <p>{article.source.name}</p>
      </div>
    </div>
  );
}
