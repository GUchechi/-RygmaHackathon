import Community from "../../components/community/Community";
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Recommended from "../../components/Recommended/Recommended";
import Upcoming from "../../components/Upcoming/Upcoming";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Recommended />
      <News />
      <Community />
      <Upcoming />
    </>
  );
};

export default HomePage;
