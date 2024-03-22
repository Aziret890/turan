import { Slide } from "react-toastify";
import BrandBlock from "../../widgets/brandSwipper/Index";
import Hero from "../../components/slider/slider";
import BrandRout from "../../components/slider/routesBrand/Index";

function HomePage() {
  return (
    <div>
      <Hero />
      <BrandRout />
      <BrandBlock />
    </div>
  );
}

export default HomePage;
