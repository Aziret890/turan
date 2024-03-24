import { Slide } from "react-toastify";
import BrandBlock from "../../widgets/brandSwipper/Index";
import Hero from "../../components/slider/slider";
import BrandRout from "../../components/slider/routesBrand/Index";
import Accessory from "../../components/accessory/Accessory";
import AllProduct from "../../widgets/AllProduct/Index";
import Recomindation from "../../components/recomindation";

function HomePage() {
  return (
    <div>
      <Hero />
      <BrandRout />
      <BrandBlock />
      <Accessory />
      <AllProduct />
      <Recomindation />
    </div>
  );
}

export default HomePage;
