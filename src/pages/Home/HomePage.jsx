import Community from "../../components/community/community";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Recommended from "../../components/Recommended/Recommended";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Recommended />
      <News />
      <Recommended />
      {/* <Community /> */}
    </>
  );
};

export default HomePage;
