import { useEffect, useState } from "react";

function Page(){
    const [news, setnews] = useState([])
    useEffect(() => {
        const get = async() => {
            const API_KEY = import.meta.env.VITE_API_KEY;
            const res = await
            fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data);
            setnews(data.articles)
        }
        get();
    }, [])
    return(
        <>
        <div className="container">
            {news.map((article, index) => (
                <div key={index}>
                    <img src={article.urlToImage} alt="" />
                    <h1>{article.description}</h1>
                    <p>{article.content}</p>
                    <h5>{article.source.name}</h5>
                </div>
            ))}
        </div>
        </>
    )
}
export default Page;