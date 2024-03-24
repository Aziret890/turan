import React, { useState } from "react";
import "./styles.scss";
import PayCardChild from "./PayCardChild";
import masterCard from "../../shared/images/masterCard.png";
import visa from "../../shared/images/visa.png";
import maesto from "../../shared/images/meastro.png";
import mbank from "../../shared/images/mbank.png";
import elsom from "../../shared/images/elsom.png";
import optima from "../../shared/images/optima.png";
function Pay() {
  const data: object[] = [
    { images: [masterCard, visa, maesto], title: "Банковская карта" },
    { images: [mbank, elsom, optima], title: "Электронный кошелек" },
    { images: null, title: "Оплата наличными" },
    { images: null, title: "Оформить рассрочку" },
  ];
  return (
    <section className="pay">
      <div className="container">
        <h1>Способ получения</h1>
        <div className="pay__content">
          <div className="pay__content__input">
            <input type="text" placeholder="Фамилия и имя" />
            <div className="pay__content__input-div flex justify-between gap-[25px] mt-4">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Телефон" />
            </div>
            <div className="pay__content__block">
              <div className="pay__content__block-child">
                <h1>Самовывоз</h1>
                <div className="flex flex-col gap-3">
                  <h4>г.Бишкек ул.Ахунбаева 132</h4>
                  <h4>пн-вс 09:00-20:00</h4>
                </div>
                <h1>Бесплатно</h1>
              </div>
              <div className="pay__content__block-child1">
                <h1>Доставка</h1>
                <div className="flex justify-between gap-10">
                  <input type="text" placeholder="Область" />
                  <input type=" text" placeholder="Город" />
                </div>
                <div className="flex justify-between gap-10">
                  <input type=" text" placeholder="Улица" />
                  <input type=" text" placeholder="Дом/кв" />
                </div>
                <h1>от 200 сом (1-3 дня)</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {data.map((el, inx) => (
              <PayCardChild key={inx} el={el} />
            ))}
          </div>
          {/* <div className="pay__content__payCard">
            <div
              onClick={() => setClick(click !== "click" ? "click" : "")}
              className={`pay__card__payCard-child${click}`}
            ></div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Pay;
