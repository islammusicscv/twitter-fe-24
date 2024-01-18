import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {JSX} from "react";

type Props = { children: JSX.Element }

const Wrapper = ({children}: Props) => {
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
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}
export default Wrapper;