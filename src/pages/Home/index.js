import "./styles.css";
import AboutUsHome from "../../components/HomeAboutUs/index";
import HomeDescription from "../../components/HomeDescription";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <HomeDescription />
      <AboutUsHome />
      <Footer />
    </div>
  );
}

export default Home;
