import { useEffect, useState } from "react";

function Page(){
    const [news, setnews] = useState([]);
    const [search, setsearch] = useState("");
    const [darkmode, setdarkmode] = useState(true);
    useEffect(() => {
        const get = async() => {
            const API_KEY = import.meta.env.VITE_API_KEY;
            let some;
            if(search){
                some = `everything?q=${search}`;
            }
            else{
                some = `top-headlines?country=us`
            }
            const res = await
            fetch(`https://newsapi.org/v2/${some}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data);
            setnews(data.articles)
        }
        get();
    }, [search])
    useEffect(() => {
        if(darkmode){
            document.body.classList.add('dark');
        }
        else{
            document.body.classList.remove('dark');
        }
    },[darkmode])
    return(
        <>
        <div className="top">
            <h1>TAMMY <span>NEWS</span></h1>
            <input type="text" value={search} onChange={(e) => setsearch(e.target.value)}/>
            <button onClick={() => setdarkmode(!darkmode)}>{darkmode? "🌙": "☀️"}</button>
        </div>
        
        <div className="container">
            {news.map((article, index) => (
                <div key={index} className="box">
                    <img src={article.urlToImage} alt="" />
                    <h2>{article.description}</h2>
                    <p>{article.content}</p>
                    <h5>{article.source.name}</h5>
                    <h6>{article.publishedAt}</h6>
                    <a href={article.url}>View More ...</a>
                </div>
            ))}
        </div>
        </>
    )
}
export default Page;