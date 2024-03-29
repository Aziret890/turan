import React from "react";
import BlockBasketChild from "./components/BlockBasketChild";
import "./styles.scss";
function BlockBasket() {
  return (
    <div className="container">
      <div className="flex justify-between">
        <h1 className="h1__basket">Корзина</h1>
        <p className="p__delete__basket cursor-pointer">Очистить корзину</p>
      </div>
      <BlockBasketChild />
      <div className="flex justify-end">
        <h1 className="h1__all-price mt-[30px]">
          Итого {1234567} сом{}
        </h1>
      </div>
      <div className="flex justify-end mt-[10px]">
        <button className="button__basket__bay">Оформить заказ</button>
      </div>
    </div>
  );
}

export default BlockBasket;
