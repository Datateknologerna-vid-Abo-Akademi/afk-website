import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Content from "./sections/Content";

const Home = () => {
    return (
        <div className="afk-site text-base text-blue-100" id="root">
            <div className="afk-content">
                <div className="sm:flex hidden z-[100] relative">
                    { /* The header is only shown on desktop*/ }
                    <Header />
                </div>
                <main>
                    <Content />
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
