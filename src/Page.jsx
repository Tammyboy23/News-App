import { useEffect, useState } from "react";

function Page(){
    const [news, setnews] = useState([]);
    const [search, setsearch] = useState("");
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
    return(
        <>
        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)}/>
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