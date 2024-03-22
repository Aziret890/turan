import AccessoryChild from "./AccessoryChild";
import "./Accessory.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
function Accessory() {
  return (
    <section>
      <div className="container">
        <div className="accessory__content mt-14">
          <h1 className="mb-6">Аксессуары</h1>
          <div className="flex justify-between gap-[30px] accessory__coontent-slider">
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
            <AccessoryChild />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Accessory;
