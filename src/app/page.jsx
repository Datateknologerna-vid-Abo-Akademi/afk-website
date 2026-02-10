import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

const Home = () => {
    return (
        <div className="bg-primary font-serif" id="root">
            <div className="sm:flex hidden z-[100]">
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
