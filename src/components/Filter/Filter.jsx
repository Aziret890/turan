import React, { useState } from "react";
import "react-dropdown/style.css";
import DropDown from "../../shared/ui/DropDown";
import close from "../../shared/svg/close.svg";
import "./styles.scss";
function Filter() {
  const [open, setOpen] = useState(false);
  const config = {
    initialSelectedItem: "Все",
    items: ["Все", "IPhone", "Mac", "IPad", "Watch", "AirPods", "Аксессуары "],
  };
  const config1 = {
    initialSelectedItem: "Все",
    items: [
      "Все",
      "IPhone 14",
      "IPhone 14 Pro",
      "IPhone 14 Pro Max",
      "Watch Series 8",
      "AirPods",
      "Аксессуары ",
    ],
  };
  const config2 = {
    initialSelectedItem: "Все",
    items: ["Все", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"],
  };
  const config3 = {
    initialSelectedItem: "Все",
    items: ["Все", "красный", "белый", "черный", "синий", "фиолетовый"],
  };
  return (
    <div className="container">
      <div className="filter__content mt-[100px]">
        <div className="filter__content__block">
          <nav>
            <DropDown {...config} />
            <DropDown {...config1} />
            <DropDown {...config2} />
            <DropDown {...config3} />
            <button>Цена</button>
            <button onClick={() => setOpen(!open)}>Все</button>
          </nav>
        </div>
      </div>
      {open == true ? (
        <div data-aos="fade-left" className="modal__block">
          <div className="flex justify-between items-center">
            <h2>Фильтры</h2>
            <img onClick={() => setOpen(!open)} src={close} alt="" />
          </div>
          <div>
            <h3>Цена, Сом</h3>
            <div className="flex flex-col gap-5">
              <input
                type="number"
                placeholder="min price"
                className="modal__block-inp"
              />
              <input
                type="number"
                placeholder="max price"
                className="modal__block-inp"
              />
            </div>
            <div className="flex flex-col gap-[30px]">
              <DropDown {...config1} />
              <DropDown {...config3} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Filter;
