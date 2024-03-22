import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import slider1Hero from "../../shared/images/slider1Hero.png";
function Hero() {
  const dataImages = [{ images: slider1Hero }, {}, {}];
  return (
    <div>
      <div className="container">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {dataImages.map((el, inx) => (
            <SwiperSlide className="swipe">
              <h1 className="desc">
                Квадракоптеры, Стабилизаторы, Микрофоны и многое другое
              </h1>
              <img src={""} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
