import { useEffect, useState } from "react";
import "react-dropdown/style.css";
import DropDown from "../../shared/ui/DropDown";
import close from "../../shared/svg/close.svg";
import "./styles.scss";
import axios from "axios";
import NewAdmissionsChild from "../NewAdmission/components/NewAdmissionsChild";
function Filter() {
  const [valueDrop, setValueDrop] = useState({
    model: "",
    volume: "",
    color: "",
    category: "",
  });
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);
  const config = {
    initialSelectedItem: "Все",
    storage: "first",
    items: ["Все", "IPhone", "Mac", "IPad", "Watch", "AirPods", "Аксессуары "],
    type: "category",
    func: onChangeDrop,
  };
  const config1 = {
    storage: "second",
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
    type: "model",
    func: onChangeDrop,
  };
  const config2 = {
    storage: "third",
    initialSelectedItem: "Все",
    items: ["Все", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"],
    type: "volume",
    func: onChangeDrop,
  };
  const config3 = {
    storage: "four",
    initialSelectedItem: "Все",
    type: "color",
    items: ["Все", "красный", "белый", "черный", "синий", "фиолетовый"],
    func: onChangeDrop,
  };

  function onChangeDrop(d: string, type: string) {
    setValueDrop((prev) => ({
      ...prev,
      [type.toLowerCase()]: d.toLowerCase(),
    }));
  }

  useEffect(() => {

    axios(
      "https://takmatov.pythonanywhere.com/products?category=4&price=&brand_products=&model=&brand_products__brand"
    ).then((res) => setData(res.data));
  }, []);

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
      <div>
        {data?.map((el) => (
          <NewAdmissionsChild
            id={el.id}
            images={el.images}
            price={el.price}
            colors={el.colors}
            rating={el.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Filter;
