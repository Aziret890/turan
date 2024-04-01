import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IProps {
  element: {
    images: string;
    info: string;
    infoDetal: string;
  };
}

function NewDetalPage({ element }: IProps) {
  const nav = useNavigate();
  // const nav = useEffect
  // const [data, setData] = useState<[]>([]);
  // useEffect(() => {
  //   axios.get("");
  // }, []);
  return (
    <div
      onClick={() => nav(`/news/newsId`)}
      className="news__content__block-child"
    >
      <img src={element.images} alt="" />
      <div className="news__content__block-child-title">
        <p>{element.info}nveqpon</p>
      </div>
    </div>
  );
}

export default NewDetalPage;
