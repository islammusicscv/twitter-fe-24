import Tweet from "../components/Tweet.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

const Home = () => {
    const baseURL = "http://localhost:3000/tweets";

    const [tweets, setTweets] = useState([]);

    const loadTweets = async () => {
        const res = await axios.get(baseURL);
        if (res.status === 200) {
            setTweets(res.data);
        }
    }
    useEffect(() => {
        loadTweets();
    }, []);

    if ((tweets) && (tweets.length > 0)) {
        return (
            <>
                {
                    tweets.map((tweet: any, i) => {
                        console.log(tweet);
                        return <Tweet key={i} dataTweet={tweet}/>
                    })
                }
            </>
        );
    } else {
        return (
            <h1>Ni objav</h1>
        );
    }


}
export default Home;