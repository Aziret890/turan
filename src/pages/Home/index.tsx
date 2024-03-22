import { Slide } from "react-toastify";
import BrandBlock from "../../widgets/brandSwipper/Index";
import Hero from "../../components/slider/slider";
import BrandRout from "../../components/slider/routesBrand/Index";
import Accessory from "../../components/accessory/Accessory";

function HomePage() {
  return (
    <div>
      <Hero />
      <BrandRout />
      <BrandBlock />
      <Accessory />
    </div>
  );
}

export default HomePage;
