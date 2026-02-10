import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Content from "./sections/Content";

const Home = () => {
    return (
        <div className="bg-primary font-serif" id="root">
            <div className="sm:flex hidden z-[100]">
                { /* The header is only shown on desktop*/ }
                <Header />
            </div>
            <div>
                <Content />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
