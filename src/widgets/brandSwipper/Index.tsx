import styles from "./index.module.scss";
import apple from "../../shared/images/appleBrand.png";
import dyson from "../../shared/images/dysonBrand.png";
import playStation from "../../shared/images/playStationBrnad.png";
import samsung from "../../shared/images/samsungBrand.png";
import xiaomi from "../../shared/images/xiaomiBrand.png";

export default function BrandBlock() {
  const dataBrand = [
    { images: apple },
    { images: dyson },
    { images: playStation },
    { images: samsung },
    { images: xiaomi },
  ];
  return (
    <footer className="container mt-[100px]">
      <h1>Бренды</h1>

      <div className="flex justify-between flex-wrap">
        {dataBrand.map((el, inx) => (
          <div
            key={inx}
            className={`flex items-center justify-center p-[24px] ${styles.brandBlock}`}
          >
            <div className="w-[143px] h-[96px]">
              <img
                style={{ width: "100%", height: "100%" }}
                src={el.images}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
}
