import React, { useState } from "react";
import "./styles.scss";
import comentSvg from "../../shared/svg/coment.svg";
import close from "../../shared/svg/close.svg";

function Coments() {
  const [open, setOpen] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  console.log(inputValue);

  return (
    <section>
      <div className="container">
        <div className="comenet__content mt-[130px]">
          <div className="comenet__content__input">
            <button
              onClick={() => setOpen(open !== "_none" ? "_none" : "")}
              className="flex justify-center gap-[25px] items-center"
            >
              <img src={comentSvg} alt="" /> Написать отзыв
            </button>
            <div className={`coment__content${open}`}>
              <div className="flex justify-between items-center">
                <h1>Написать отзыв</h1>
                <img
                  onClick={() => setOpen(open !== "_none" ? "_none" : "")}
                  src={close}
                  alt=""
                />
              </div>
              <h2>Отзыв</h2>
              <textarea
                onChange={(e) => setInputValue(e.target.value)}
                name=""
                id=""
              ></textarea>
            </div>
          </div>
          <div className="comenet__content__child mt-[30px] flex flex-col gap-[30px]">
            <div className="comenet__content__child__block">
              <h1>Айгерим Атамбекова</h1>
              <p>
                Заказала долгожданный свой Iphone на этом сайте, спасибо большое
                у вас цены всегда ниже, чем в других местах. Заказ пришел
                вовремя, Успехов Вам всегда!
              </p>
            </div>
            <div className="comenet__content__child__block">
              <h1>Айгерим Атамбекова</h1>
              <p>
                Заказала долгожданный свой Iphone на этом сайте, спасибо большое
                у вас цены всегда ниже, чем в других местах. Заказ пришел
                вовремя, Успехов Вам всегда!
              </p>
            </div>{" "}
            <div className="comenet__content__child__block">
              <h1>Айгерим Атамбекова</h1>
              <p>
                Заказала долгожданный свой Iphone на этом сайте, спасибо большое
                у вас цены всегда ниже, чем в других местах. Заказ пришел
                вовремя, Успехов Вам всегда!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Coments;
