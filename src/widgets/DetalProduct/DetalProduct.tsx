import React, { useEffect, useState } from "react";
import "./styles.scss";
import star from "../../shared/images/starAll.png";
import love from "../../shared/svg/love.svg";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface Product {
  images: string[];
  name: string;
  price: number;
  description: string;
  characteristics: { title: string; value: string }[];
}

function DetalProduct() {
  const [active, setActive] = useState<string>("");
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get<Product>(
          `https://takmatov.pythonanywhere.com/product/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <section className="detalProduct">
      <div className="container">
        <h2>
          <span onClick={() => navigate("/")}> Главная </span>/ Каталог /{" "}
          {product?.name}
        </h2>
        <div className="detalProduct__content flex justify-between">
          <div className="detalProduct__content__left">
            <div className="detalProduct__content__left-top flex justify-center items-center">
              <div className="w-[420px] h-[335px]">
                {product && product.images.length > 0 && (
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "contain",
                    }}
                    src={`https://takmatov.pythonanywhere.com/${product.images[selectedImageIndex]}`}
                    alt=""
                  />
                )}
              </div>
            </div>
            <div className="detalProduct__content__left-top-wrapper flex justify-between mt-[45px]">
              {product?.images?.map((imageUrl, index) => (
                <div
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className="detalProduct__content__left-child"
                >
                  <img
                    width={"100%"}
                    height={"100%"}
                    style={{
                      objectFit: "cover",
                      minHeight: "100px",
                      maxWidth: "130px",
                    }}
                    src={`https://takmatov.pythonanywhere.com/${imageUrl}`}
                    alt=""
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-start items-center mt-4 gap-[50px]">
              <h2>Выбрать цвет</h2>
              <div>color</div>
            </div>
            <div className="detalProduct__content__left-review">
              <h1>Описание</h1>
              <p>
                {product?.description?.length > 100
                  ? product?.description.slice(0, 356)
                  : product?.description}
              </p>
            </div>
          </div>
          <div className="detalProduct__content__right">
            <div className="flex justify-end">
              <img src={star} alt="" />
            </div>
            <h1>{product?.name}</h1>
            <div className="flex gap-[30px]">
              <p>Память</p>
              <div className="flex justify-start gap-[30px]">
                <button
                  className={`detalProduct__content__right-button${active}`}
                >
                  256 gb
                </button>
              </div>
            </div>
            <h1>{product?.price} сом</h1>
            <div className="flex justify-start gap-[40px]">
              <button className="detalProduct__content__right-button-bay">
                В корзину
              </button>
              <img src={love} alt="" />
            </div>
            <h2>Характеристики:</h2>
            <div>
              {product?.characteristics?.map(({ title, value }, index) => (
                <p key={index}>
                  {title}......{value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetalProduct;
