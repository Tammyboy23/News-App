import { useEffect } from "react";

function Page(){
    useEffect(() => {
        const get = async() => {
            const API_KEY = process.env.REACR_APP_API_KEY;
            const res = await
            fetch(`https://newsapi.org/v2/top-headlines?country=us&${API_KEY}=`)
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