import Acomplishments from "../components/Acomplishments/Acomplishments";
import BgAnimation from "../components/BackgroundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";
import { HeroSection } from "../components/Hero/HeroStyles";
import Info from "../components/Hero/Info";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import Timeline from "../components/TimeLine/TimeLine";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <HeroSection grid nopadding>
        <Hero />
        <BgAnimation />
      </HeroSection>
      <Info />
      <Projects />
      <Timeline />
      <Technologies />
      <Acomplishments />
    </Layout>
  );
};

export default Home;
