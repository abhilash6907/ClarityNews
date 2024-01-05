import { useEffect, useState } from "react";
import "./App.css";
import News from "./News";

function App() {
  let [articles, setarticles] = useState([]);
  let [category, setCategory] = useState("India");

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2024-01-2&apiKey=c826a1a55a734b06b9744f8bd5a8408c`)
      .then((Response) => Response.json())
      .then((news) => {
        setarticles(news.articles);
        console.log(news.articles);
      })
      .catch((err) => {
        console.log("error");
      });
  }, [category]);

  return (
    <div className="App">
      <header className="header">
        <h2>Aaj Tak</h2>
        <input type="text" onChange={(event)=>{
          if(event.target.value!=="")
          {
            setCategory(event.target.value);
          }
          else{
            setCategory("India")
          }
        }} placeholder="Search News"/>
      </header>
      <section className="news-articles">
        
        
        {
        articles.length!==0?


        articles.map((article) => {
          return <News article={article} />;
        })
      :
      <h3>No News Found For Search Text</h3>}
      </section>
    </div>
  );
}

export default App;
