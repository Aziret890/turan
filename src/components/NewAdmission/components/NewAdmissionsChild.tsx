import React from "react";
import arrow from "../../shared/svg/arrow.svg";
import star from "../../../shared/images/starAll.png";
import phone from "../../../shared/images/apple14.png";
import checkMark from "../../../shared/svg/checkMark.svg";
import love from "../../../shared/svg/love.svg";
import basket from "../../../shared/svg/basket.svg";
import { useNavigate } from "react-router-dom";
function NewAdmissionsChild() {
  const nav = useNavigate();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={`${1 * 1300}`}
      onClick={() => nav("/product/1")}
      className="newAdmissions__content1-child"
    >
      <div className="flex justify-around items-center mt-3">
        <div className="newColor">Новое</div>
        <img src={star} alt="" />
      </div>
      <div className="flex flex-col items-center mt-3">
        <img src={phone} alt="" />
        <div className="flex justify-between gap-[116px] mb-3 items-center">
          <div className="flex items-end gap-2">
            <img src={checkMark} alt="" />
            <p>В наличии</p>
          </div>
          <img src={love} alt="" />
        </div>
        <div className="flex flex-col items-start pl-4">
          <h2>100 415 сом</h2>
          <p>Смартфон Apple iPhone 14 Pro Max 256GB EU</p>
          <p>
            iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone.
            .....
          </p>
          <div className="flex justify-between gap-[60px] mt-5">
            <button className="p-10">Быстрый заказ</button>
            <img src={basket} alt="" />
          </div>
          <div className="mt-4 flex gap-5 items-center">
            <h3>Цвет</h3>
            <div className="flex gap-4">
              <div className="newAdmissions__content1-child-black"></div>
              <div className="newAdmissions__content1-child-red"></div>
              <div className="newAdmissions__content1-child-mol"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewAdmissionsChild;
