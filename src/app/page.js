import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";

const Home = () => {
  return (
    <div className="bg-red-600">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default Home;
