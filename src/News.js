import React from "react";

export default function News(props) {
  return (
    <div className="News">
      <div className="news-img">

        {
props.article.urlToImage!==null?
<img src={props.article.urlToImage}/>:
<img  src="https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"/>
        }
        
      </div> 
      <h1> {props.article.title}</h1>
      <p>{props.article.description?.substring(0,100).concat("...")}<a href={props.article.url} target={"_blank"}> Read More</a></p>
      
      <div className="source">
        <p> Author: {props.article.author}</p>
        <p>{props.article.source.name}</p>
      </div>
    </div>
  );
}
