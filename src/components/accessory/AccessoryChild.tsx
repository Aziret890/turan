import React from "react";
import star from "../../shared/images/starAll.png";
import zaradka from "../../shared/images/sliderZaradka.png";
import basket from "../../shared/svg/basket.svg";
function AccessoryChild() {
  const dataStar = [{ rating: 1, images: star }];
  return (
    <div className="accessory__content__child p-2">
      <div className="accessory__content__child-star  flex justify-end">
        {dataStar.map((el, inx) => (
          <img key={inx} src={el.images} alt="" />
        ))}
      </div>
      <div className="flex flex-col items-center mb-3">
        <div className="w-[153px] h-[153px]">
          <img width={"100%"} src={zaradka} alt="" />
        </div>
        <h3>Адаптер Apple</h3>
        <h2>5 700 сом</h2>
      </div>
      <div className="flex justify-around">
        <button>5 700 сом</button>
        <img src={basket} alt="" />
      </div>
    </div>
  );
}

export default AccessoryChild;
