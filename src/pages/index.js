import Acomplishments from "../components/Acomplishments/Acomplishments";
import BackgroundAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import { DownLoadButton, HeroSection } from "../components/Hero/HeroStyles";
import Info from "../components/Hero/Info";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";
import Button from "../styles/GlobalComponents/Button";

const Home = () => {
  return (
    <Layout>
      <BackgroundAnimation />
      <Hero />
      <Projects />
      <Timeline />
      <Technologies />
      <Acomplishments />
      <Footer />
    </Layout>
  );
};

export default Home;
