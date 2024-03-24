import React, { useState } from "react";
import "./styles.scss";
import phone from "../../shared/images/apple14.png";
import star from "../../shared/images/starAll.png";
import love from "../../shared/svg/love.svg";

interface DataInfo {
  images: string[];
  title: string;
  price: number;
  guarantee: string;
  screen: string;
  screenTechnology: string;
  numberOfCores: string;
  infoProduct: string;
  color?: string;
}
function DetalProduct() {
  const [active, setActive] = useState<string>("");
  const dataInfo: DataInfo = {
    images: [phone, phone, phone],
    title: "Apple IPhone 14 Pro Max ",
    price: 75400,
    guarantee: "",
    screen: "",
    screenTechnology: "",
    numberOfCores: "",
    infoProduct:
      "Смартфон iPhone 14 в корпусе цвета Gold со встроенной памятью 128 Гб оснащен экраном диагональю 6,1 дюйма, выполненным по технологии OLED. Дисплей типа Super Retina XDR обладает разрешением 2532x1170 пикселей. В этой модели установлен шестиядерный процессор А15 Bionic. В девайсе ",
  };
  return (
    <section className="detalProduct">
      <div className="container">
        <h2>Главная / Каталог / Iphone / {"Ipnone 14 Pro max"}</h2>
        <div className="detalProduct__content flex justify-between">
          <div className="detalProduct__content__left">
            <div className="detalProduct__content__left-top">
              <img src={phone} alt="" />
            </div>
            <div className="detalProduct__content__left-top-wrapper">
              <div className="detalProduct__content__left-child"></div>
            </div>
            <div className="flex justify-start items-center mt-4 gap-[50px]">
              <h2>Выбрать цвет</h2>
              <div>color</div>
            </div>
            <div className="detalProduct__content__left-review">
              <h1>Описание</h1>
              <p></p>
            </div>
          </div>
          <div className="detalProduct__content__right">
            <div className="flex justify-end">
              <img src={star} alt="" />
            </div>
            <h1>gege</h1>
            <div className="flex gap-[30px]">
              <p>Память</p>
              <div className="flex justify-start gap-[30px]">
                <button
                  onClick={() => setActive(active !== "active" ? "active" : "")}
                  className={`detalProduct__content__right-button${active}`}
                >
                  256 gb
                </button>
              </div>
            </div>
            <h1>74500</h1>
            <div className="flex justify-start gap-[40px]">
              <button className="detalProduct__content__right-button-bay">
                В корзину
              </button>
              <img src={love} alt="" />
            </div>
            <h2>Характеристики:</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalProduct;
