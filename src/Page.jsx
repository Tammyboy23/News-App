import { useEffect } from "react";

function Page(){
    useEffect(() => {
        const get = async() => {
            const API_KEY = "247b726c211c47eba644541d21179282";
            const res = await
            fetch(`https://newsapi.org/v2/everything?q=tesla&from=2026-04-05&sortBy=publishedAt&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data);
        }
        get();
    }, [])
    return(
        <>
        <h1>Hello there</h1>
        </>
    )
}
export default Page;