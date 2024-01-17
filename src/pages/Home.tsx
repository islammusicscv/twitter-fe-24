import Tweet from "../components/Tweet.tsx";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import axios from "axios";
import {useEffect, useState} from "react";

const Home = () => {
    const baseURL = "http://localhost:3000/tweets";

    const [tweets, setTweets] = useState(null);

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
                <Header/>
                <main>
                    <section className="py-5 text-center container">
                        <div className="row py-lg-5">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h1 className="fw-light">Twitter ERŠ</h1>
                            </div>
                        </div>
                    </section>
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                                {
                                    tweets.map((tweet: any, i) => {
                                        console.log(tweet);
                                        return <Tweet key={i} dataTweet={tweet}/>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </>
        );
    } else {
        return (
            <h1>Ni objav</h1>
        );
    }


}
export default Home;