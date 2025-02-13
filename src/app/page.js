import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

const Home = () => {
  return (
    <div className="bg-primary font-serif" id="root">
      <div className="sm:flex hidden">
        <Header />
      </div>
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
