import React, { useEffect, useState } from "react";
import NewAdmissionsChild from "../NewAdmission/components/NewAdmissionsChild";
import "./styles.scss";
import arrow from "../../shared/svg/arrow.svg";
import axios from "axios";

function Recomindation() {
  const [data, setData] = useState<object[]>([]);
  useEffect(() => {
    axios("https://takmatov.pythonanywhere.com/products").then((res) =>
      setData(res.data.filter((el) => el.rating >= 2))
    );
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="newAdmissions__content mt-14">
        <div className="flex justify-between">
          <h1>Рекомендация</h1>
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
    </div>
  );
}

export default Recomindation;
