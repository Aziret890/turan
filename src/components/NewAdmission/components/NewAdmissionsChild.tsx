import checkMark from "../../../shared/svg/checkMark.svg";
import love from "../../../shared/svg/love.svg";
import basket from "../../../shared/svg/basket.svg";
import { useNavigate } from "react-router-dom";
import Star from "../../Star/Star";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
interface IProps {
  id: number;
  images: any[];
  price: number;
  colors?: string[];
  rating: number;
}
//vwfgef
function NewAdmissionsChild({ images, price, colors, id, rating }: IProps) {
  const userJwt = Cookies.get("jwt");
  const [basketId, setBAsketID] = useState<number | null>(null);
  console.log(userJwt);

  // useEffect(() => {
  //   if (basketId != null) {
  //     axios.post(
  //       `https://takmatov.pythonanywhere.com/addProductToBasket/${basketId}`,
  //       userJwt
  //     );
  //   }
  // }, []);
  const nav = useNavigate();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-duration={`${id * 1300}`}
      onClick={() => nav(`/product/${id}`)}
      className="newAdmissions__content1-child"
    >
      <div className="flex justify-around items-center mt-3">
        <div className="newColor">Новое</div>
        {/* <img src={star} alt="" /> */}
        <Star count={rating} />
      </div>
      <div className="flex flex-col items-center mt-3 h-[200px]">
        {images[0] == 1 || images[0].length > 15 ? (
          <img
            src={`https://takmatov.pythonanywhere.com/${images[0]}`}
            alt=""
          />
        ) : (
          <img
            src="https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ="
            alt=""
          />
        )}
        <div className="flex justify-between gap-[116px] mb-3 items-center">
          <div className="flex items-end gap-2">
            <img src={checkMark} alt="" />
            <p>В наличии</p>
          </div>
          <img src={love} alt="" />
        </div>
        <div className="flex flex-col items-start pl-4">
          <h2>{price} сом</h2>
          <p>Смартфон Apple iPhone 14 Pro Max 256GB EU</p>
          <p>
            iPhone 14 Pro MaxВолшебный новый способ взаимодействия с iPhone.
            .....
          </p>
          <div className="flex justify-between gap-[60px] mt-5">
            <button className="p-10">Быстрый заказ</button>
            <img
              onClick={(e) => (e.stopPropagation(), setBAsketID(id))}
              src={basket}
              alt=""
            />
          </div>
          <div className="mt-4 flex gap-5 items-center">
            <h3>Цвет</h3>
            {/* <Star count={id} /> */}
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
