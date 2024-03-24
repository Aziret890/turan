import React from "react";

interface IProps {

  element:{
    images: string;
    info: string;
    infoDetal: string;
  }
}

function NewDetalPage({ element }: IProps) {

  return (
    <div className="news__content__block-child">
      <img src={element.images} alt="" />
      <div className="news__content__block-child-title">
        <p>{element.info}</p>
      </div>
    </div>
  );
}

export default NewDetalPage;
