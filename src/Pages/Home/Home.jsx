import Slider from "../../Components/Slider/Slider";
import HomePartOne from "../../Components/HomePartOne/HomePartOne";
import HomeCategory from "../../Components/HomeCategory/HomeCategory";
import HomeDeals from "../../Components/HomeDeals/HomeDeals";
import HomeFeatured from "../../Components/HomeFeatured/HomeFeatured";

export default function Home() {
  return (
    <>
      <Slider />
      <HomePartOne />
      <HomeCategory/>
      <HomeDeals/>
      <HomeFeatured/>
    </>
  );
}
