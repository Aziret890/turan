import "./styles.scss";
import arrow from "../../shared/svg/arrow.svg";
import star from "../../shared/images/starAll.png";
import phone from "../../shared/images/apple14.png";
import checkMark from "../../shared/svg/checkMark.svg";
import love from "../../shared/svg/love.svg";
import basket from "../../shared/svg/basket.svg";
import NewAdmissionsChild from "./components/NewAdmissionsChild";
import { useEffect, useState } from "react";
import axios from "axios";
interface IProps {
  id: number;
  images: string[];
  price: number;
  colors: string[];
}
function NewAdmissions() {
  const [data, setData] = useState<[]>([]);
  useEffect(() => {
    axios("https://takmatov.pythonanywhere.com/products").then((res) =>
      setData(res.data)
    );
  }, []);

  return (
    <div className="newAdmissions__content mt-14">
      <div className="flex justify-between">
        <h1>Новое поступление</h1>
        <div className="flex gap-5">
          <h1>Смотреть все</h1>
          <button>
            <img src={arrow} alt="" />
          </button>
        </div>
      </div>
      <div className="newAdmissions__content1">
        {data?.map((el) => (
          <NewAdmissionsChild
            rating={el.rating}
            key={el.id}
            id={el.id}
            images={el.images}
            price={el.price}
            colors={el.colors}
          />
        ))}
      </div>
    </div>
  );
}

export default NewAdmissions;
