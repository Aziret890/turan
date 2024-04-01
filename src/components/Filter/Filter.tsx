import { useEffect, useState } from "react";
import "react-dropdown/style.css";
import DropDown from "../../shared/ui/DropDown";
import close from "../../shared/svg/close.svg";
import "./styles.scss";
import axios from "axios";
import NewAdmissionsChild from "../NewAdmission/components/NewAdmissionsChild";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const config: [] = ["Все категории", "Телефоны", "Mac", "Watch", "Аксессуары "];
const config1: [] = [
  "Все",
  "IPhone 14",
  "IPhone 14 Pro",
  "IPhone 14 Pro Max",
  "Watch Series 8",
  "AirPods",
  "Аксессуары",
];
const config2 = ["Все", "128 ГБ", "256 ГБ", "512 ГБ", "1 ТБ"];

const config3 = ["Все", "красный", "белый", "черный", "синий", "фиолетовый"];
function Filter() {
  const [valueDrop, setValueDrop] = useState<string>("Все");
  const [valueDropPrice, setValueDropPrice] = useState<string>("Все");

  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (valueDrop.length > 0) {
      let url = "";
      switch (valueDrop) {
        case "Все категории":
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
          case "Аксессуары":
            url = "https://takmatov.pythonanywhere.com/products?category=4";
            break;
        default:
          break;
      }
      if (url) {
        axios.get(url).then((res) => {
          setData(res.data);
          console.log("Response:", res);
        });
      }
    } else if (valueDropPrice) {
      axios
        .get(
          `https://takmatov.pythonanywhere.com/products?category=&price=${valueDropPrice}`
        )
        .then((res) => setData(res.data));
    }
  }, [valueDrop, valueDropPrice]);

  return (
    <div className="container">
      <div className="filter__content mt-[100px]">
        <div className="filter__content__block">
          <nav>
            <Menu isLazy>
              <MenuButton>{"модель"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config.map((el, inx) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    key={inx}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"Модель"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config1.map((el, inx) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    key={inx}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"Объем"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config2.map((el, inx) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    key={inx}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu isLazy>
              <MenuButton>{"Цвет"}</MenuButton>
              <MenuList
                zIndex={"10"}
                background={"white"}
                padding={"10px 13px"}
              >
                {config3.map((el, inx) => (
                  <MenuItem
                    onClick={() => setValueDrop(el)}
                    key={inx}
                    marginBottom={"15px"}
                  >
                    {el}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

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
                onChange={(e) => setValueDropPrice(e.target.value)}
                type="number"
                placeholder="price"
                className="modal__block-inp"
              />
            </div>
            <div className="flex flex-col gap-[30px]">vneo</div>
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
