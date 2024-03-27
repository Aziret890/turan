import React, { useEffect, useState } from "react";
import "./styles.scss";
import phone from "../../shared/images/apple14.png";
import star from "../../shared/images/starAll.png";
import love from "../../shared/svg/love.svg";
import axios from "axios";

interface DataInfo {
  images: string[];
  name: string;
  price: number;
  description: string;
  model: object[];
  characteristics: object[];
}
function DetalProduct() {
  const [valueImage, setValueImage] = useState<number>(0);
  const [active, setActive] = useState<string>("");
  const [data, setData] = useState<object>({});
  useEffect(() => {
    axios
      .get<DataInfo>("https://takmatov.pythonanywhere.com/product/15/")
      .then((res) => setData(res.data));
  }, []);
  console.log(data);
  return (
    <section className="detalProduct">
      <div className="container">
        <h2>Главная / Каталог / Iphone / {data.name}</h2>
        <div className="detalProduct__content flex justify-between">
          <div className="detalProduct__content__left">
            <div className="detalProduct__content__left-top flex justify-center items-center">
              <div className="w-[420px] h-[335px]">
                {data.images && data.images.length > 0 && (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={`https://takmatov.pythonanywhere.com/${data.images[valueImage]}`}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="detalProduct__content__left-top-wrapper flex justify-between mt-[45px]">
              {data.images?.map((el, inx) => (
                <div
                  onClick={() => setValueImage(inx)}
                  className="detalProduct__content__left-child"
                >
                  <img
                    src={`https://takmatov.pythonanywhere.com/${el}`}
                    alt=""
                  />
                </div>
              ))}
              {/* <div className="detalProduct__content__left-child"></div>
              <div className="detalProduct__content__left-child"></div>
              <div className="detalProduct__content__left-child"></div> */}
            </div>
            <div className="flex justify-start items-center mt-4 gap-[50px]">
              <h2>Выбрать цвет</h2>
              <div>color</div>
            </div>
            <div className="detalProduct__content__left-review">
              <h1>Описание</h1>
              <p>{data.description}</p>
            </div>
          </div>
          <div className="detalProduct__content__right">
            <div className="flex justify-end">
              <img src={star} alt="" />
            </div>
            <h1>{data.name}</h1>
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
            <h1>{data.price} сом</h1>
            <div className="flex justify-start gap-[40px]">
              <button className="detalProduct__content__right-button-bay">
                В корзину
              </button>
              <img src={love} alt="" />
            </div>
            <h2>Характеристики:</h2>
            <div>
              {data.characteristics?.map((el) => (
                <p>
                  {el.title}......{el.value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalProduct;
