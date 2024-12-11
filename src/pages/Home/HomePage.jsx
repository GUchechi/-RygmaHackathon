import Community from "../../components/community/Community";  // Capitalized 'C'
import Hero from "../../components/Hero/Hero";
import News from "../../components/News/News";
import Recommended from "../../components/Recommended/Recommended";




const HomePage = () => {
  return (
    <>
      <Hero />
      <Recommended />
      <News />
      <Community />
    </>
  );
};

export default HomePage;
