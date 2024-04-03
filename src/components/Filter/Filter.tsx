import React, { useEffect, useState } from "react";
import "./styles.scss";
import close from "../../shared/svg/close.svg";
import axios from "axios";
import NewAdmissionsChild from "../NewAdmission/components/NewAdmissionsChild";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

interface ConfigItem {
  id: number;
  title: string;
}
const config2: string[] = ["Все", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"];

const config3: string[] = [
  "Все",
  "красный",
  "белый",
  "черный",
  "синий",
  "фиолетовый",
];
const config4: string[] = [
  "Все категории",
  "Телефоны",
  "Mac",
  "Watch",
  "Аксессуары ",
  "Apple",
];
function Filter() {
  const [configId, setConfigId] = useState<number>(1);
  const [config, setConfig] = useState<ConfigItem[]>([]);
  const [valueDrop, setValueDrop] = useState<string>("Все категории");
  const [valueDropPrice, setValueDropPrice] = useState<number | null>(null);
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
    console.log(valueDrop);
    console.log(configId);
  }, [valueDrop, valueDropPrice, configId]);

  const fetchData = () => {
    if (valueDrop == "Цена") {
      setData([]);
      return;
    }

    let url = "";
    switch (valueDrop) {
      case "Все категории":
        url = "https://takmatov.pythonanywhere.com/products";
        break;
      case "Телефоны":
        url = "https://takmatov.pythonanywhere.com/products?category=1";
        break;
      case "Mac":
        url = "https://takmatov.pythonanywhere.com/products?category=2";
        break;
      case "Watch":
        url = "https://takmatov.pythonanywhere.com/products?category=3";
        break;
      case "Аксессуары":
        url = "https://takmatov.pythonanywhere.com/products?category=4";
        break;
      case "Apple":
        url =
          "https://takmatov.pythonanywhere.com/products?category=&price=&brand_products=&model=&brand_products__brand=1";
        break;
      default:
        console.log("error in switch");
        break;
    }

    if (url) {
      axios.get(url).then((res) => {
        setData(res.data);
        console.log("Response:", res);
      });
    }
    if (data.length < 1) {
      axios(`https://takmatov.pythonanywhere.com/models`).then((res) =>
        setConfig(res.data)
      );
      axios(
        `https://takmatov.pythonanywhere.com/products?category=&price=&brand_products=&model=${configId}`
      ).then((res) => setData(res.data));
    }
  };

  return (
    <div className="container">
      <div className="filter__content mt-[100px]">
        <div className="filter__content__block">
          <nav>
            <Menu isLazy>
              <MenuButton>{"модель телефона"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config4?.map((el) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    key={el}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"память"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config2?.map((el) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"модель"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config?.map((el) => (
                  <MenuItem
                    onClick={() => (setConfigId(el.id), setData([]))}
                    key={el.id}
                    marginBottom={"15px"}
                  >
                    {el.title}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"Цвета"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config3?.map((el) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <button>Цена</button>
            <button onClick={() => setOpen(!open)}>Все</button>
            {/* Other Menu components for different filters */}
          </nav>
        </div>
      </div>
      {open && (
        <div data-aos="fade-left" className="modal__block">
          <div className="flex justify-between items-center">
            <h2>Фильтры</h2>
            <button>
              <img
                onClick={() => {
                  setOpen(false);
                  setValueDropPrice(null);
                }}
                src={close}
                alt=""
              />
            </button>
          </div>
          <div>
            <h3>Цена, Сом</h3>
            <div className="flex flex-col gap-5">
              <input
                onChange={(e) => setValueDropPrice(+e.target.value)}
                type="number"
                placeholder="price"
                className="modal__block-inp"
              />
            </div>
            <div className="flex flex-col gap-[30px]">vneo</div>
          </div>
        </div>
      )}
      <div className="flex flex-wrap items-start justify-center gap-10 my-5">
        {data.map((el) => (
          <NewAdmissionsChild
            key={el.id}
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
