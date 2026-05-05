import { useEffect, useState } from "react";

function Page() {
  const [news, setnews] = useState([]);
  const [search, setsearch] = useState("");
  const [darkmode, setdarkmode] = useState(true);

  useEffect(() => {
    const get = async () => {
      const API_KEY = import.meta.env.VITE_API_KEY;
      let some;
      if (search) {
        some = `everything?q=${search}`;
      } else {
        some = `top-headlines?country=us`;
      }
      const res = await fetch(`https://newsapi.org/v2/${some}&apiKey=${API_KEY}`);
      const data = await res.json();
      setnews(data.articles);
    };
    get();
  }, [search]);

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkmode]);

  const formatDate = (str) =>
    new Date(str).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric",
    });

  return (
    <>
      <div className="top">
        <h1>TAMMY <span>NEWS</span></h1>
        <input
          type="search"
          value={search}
          placeholder="Search stories..."
          onChange={(e) => setsearch(e.target.value)}
        />
        <button onClick={() => setdarkmode(!darkmode)}>
          {darkmode ? "🌙" : "☀️"}
        </button>
      </div>

      <div className="container">
        {news.map((article, index) => (
          <div key={index} className="box">
            {article.urlToImage && (
              <img src={article.urlToImage} alt="" />
            )}
            <div className="box-body">
              <div className="box-meta">
                <h5>{article.source.name}</h5>
                <h6>{formatDate(article.publishedAt)}</h6>
              </div>
              <h2>{article.description}</h2>
              <p>{article.content}</p>
              <div className="box-spacer" />
              <a href={article.url} target="_blank" rel="noreferrer">
                View More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Page;