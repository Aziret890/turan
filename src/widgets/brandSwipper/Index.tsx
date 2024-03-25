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
      <h1
        style={{
          color: "rgb(0, 0, 0)",
          fontSize: "30px",
          fontWeight: "400",
          lineHeight: "60px",
          letterSpacing: "0%",
        }}
        className="brandBlockh1 mt-[100px]"
      >
        Бренды
      </h1>
      <div className="flex justify-between flex-wrap mt-14">
        {dataBrand.map((el, inx) => (
          <div
            key={inx}
            data-aos={"flip-up"}
            data-aos-duration={4400 + inx == 0 ? inx * 3000 : inx * 1000}
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
