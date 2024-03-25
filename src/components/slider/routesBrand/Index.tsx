import "./style.scss";
import apple from "../../../shared/images/appleHero.png";
import xiaomi from "../../../shared/images/xiaomiHero.png";
import sony from "../../../shared/images/soniHero.png";
import dyson from "../../../shared/images/dysonHero.png";
function BrandRout() {
  const data = [
    { images: apple, title: "apple" },
    { images: sony, title: "Sony Playstation" },
    { images: xiaomi, title: "xiaomi" },
    { images: sony, title: "Sony Playstation" },
  ];
  return (
    <div className="container">
      <div className="brandRout__content mt-14">
        <div
          data-aos="zoom-in"
          data-aos-duration={`${1300 * 1}`}
          className="brandRout__content__left"
        >
          <img src={dyson} alt="" />
          <button>dyson</button>
        </div>
        <div className="brandRout__content__right ">
          {data.map((el, inx) => (
            <div
              data-aos="zoom-in"
              data-aos-duration={`${1300}`}
              key={inx}
              className="brandRout__content__right-child"
            >
              <img src={el.images} alt="" />
              <button>{el.title}</button>
            </div>
          ))}
          {/* <div className="brandRout__content__right-child">
            <img src={xiaomi} alt="" />
            <button>xiaomi</button>
          </div>
          <div className="brandRout__content__right-child">
            <img src={sony} alt="" />
            <button>Sony Playstation</button>
          </div>
          <div className="brandRout__content__right-child">
            <img src={sony} alt="" />
            <button>Sony Playstation</button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BrandRout;
