import React from "react";
import phone from "../../../shared/images/apple14.png";
import delete1 from "../../../shared/svg/delete.svg";
import star from "../../../shared/images/starAll.png";

import "../styles.scss";
function BlockBasketChild() {
  const data = [
    {
      title: "Смартфон Apple Iphone 14 Pro max 256GB",
      info: "iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....",
      price: 74500,
      color: "white",
      count: 1,
    },
  ];
  return (
    <div className="block__basket-child flex justify-between pt-[20px]">
      <div>
        <img src={phone} alt="" />
      </div>
      <div>
        <h1>Смартфон Apple Iphone 14 Pro max 256GB</h1>
        <p>iPhone 14 Pro MaxВолшебный новый способ взаимодействия.....</p>
        <div>
          <div className="flex justify-between items-center">
            <div className="flex gap-10">
              <h3>Цвет</h3>
              <div className="block__absket-child-color">whi</div>
            </div>
            <div className="w-[236px] flex justify-between items-center">
              <button>-</button>
              <h1>{data[0].count}</h1>
              <button>+</button>
            </div>
            <div>
              <button className="block__basket-child-delete flex gap-4">
                <img src={delete1} alt="" />
                Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[35px]">
        <div className="flex justify-end">
          <img src={star} alt="" />
        </div>
        <h2>{data[0].price} сом</h2>
        <del>
          <p className="text-en">{(data[0].price / 100) * 95} сом </p>
        </del>
      </div>
    </div>
  );
}

export default BlockBasketChild;
