import "./style.scss";
import apple from "../../../shared/images/appleHero.png";
import xiaomi from "../../../shared/images/xiaomiHero.png";
import sony from "../../../shared/images/soniHero.png";
import dyson from "../../../shared/images/dysonHero.png";

function BrandRout() {
  return (
    <div className="container">
      <div className="brandRout__content mt-14">
        <div className="brandRout__content__left">
          <img src={dyson} alt="" />
          <button>dyson</button>
        </div>
        <div className="brandRout__content__right ">
          <div className="brandRout__content__right-child">
            <img src={apple} alt="" />
            <button>apple</button>
          </div>
          <div className="brandRout__content__right-child">
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandRout;
