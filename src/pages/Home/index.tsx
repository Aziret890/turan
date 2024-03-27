import { Slide } from "react-toastify";
import BrandBlock from "../../widgets/brandSwipper/Index";
import Hero from "../../components/slider/slider";
import BrandRout from "../../components/slider/routesBrand/Index";
import Accessory from "../../components/accessory/Accessory";
import AllProduct from "../../widgets/AllProduct/Index";
import Recomindation from "../../components/recomindation";
import { useEffect } from "react";
import axios from "axios";

function HomePage() {
  // useEffect(() => {
  //   axios("https://takmatov.pythonanywhere.com/products").then(console.log);
  // }, []);
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
