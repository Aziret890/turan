import React, { useState } from "react";
interface IProps {
  images: [];
  title: string;
  el: any;
}
function PayCardChild({ el }: IProps) {
  const [click, setClick] = useState<string>("");
  return (
    <div className="pay__content__payCard">
      <div
        onClick={() => setClick(click !== "click" ? "click" : "")}
        className={`pay__card__payCard-child${click}`}
      >
        <h1>{el.title}</h1>
        <div className="flex justify-between">
          {el.images?.map((el: string, inx: number) => (
            <img key={inx} src={el} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PayCardChild;
