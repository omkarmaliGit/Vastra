import BestSeller from "../components/Home/BestSeller";
import Hero from "../components/Home/Hero";
import LatestCollection from "../components/Home/LatestCollection";
import NewsletterBox from "../components/Home/NewsletterBox";
import OurPolicy from "../components/Home/OurPolicy";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsletterBox />
    </>
  );
};

export default Home;
