import AboutCard from "../components/AboutCard";
import Contact from "../components/Contact";
import MyPortfolio from "../components/MyPortfolio";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <section className="px-2 max-w-7xl mx-auto  py-8 md:py-12">
      <AboutCard />
      <Skills />
      <MyPortfolio />
      <Contact />
    </section>
  );
};

export default Home;
