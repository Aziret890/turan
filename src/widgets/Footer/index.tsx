import styles from "./index.module.scss";
import logoFooter from "../../shared/images/logoFooter1.png";
import instagram from "../../shared/svg/instagram.svg";
import twitter from "../../shared/svg/twitter.svg";
import faceBook from "../../shared/svg/faceBook.svg";
import maps1 from "../../shared/svg/maps1.svg";
import map from "../../shared/svg/map.svg";
import phone from "../../shared/svg/phone.svg";
import gmail from "../../shared/svg/gmail.svg";

export default function Footer() {
  return (
    <footer className="container">
      {/* <h1>footer</h1> */}
      <div className="flex justify-between items-start mt-[65px]">
        <img src={logoFooter} alt="" />
        <p className={styles.footerInfo}>
          Turan Electronics - ваш идеальный магазин для шопинга. Обнаружьте
          последние тренды, выбирайте изысканные товары, оформляйте заказы с
          легкостью. Элегантный дизайн, безопасные платежи и быстрая доставка -
          все, что вам нужно для приятного онлайн-шопинга.
          <br />
          <br />
          Превратите свои желания в реальность с нами!
        </p>
      </div>
      <div className={`flex justify-start gap-10 mt-[30px]`}>
        <div
          className={`flex justify-center items-center cursor-pointer ${styles.footerBrandBlock}`}
        >
          <img src={instagram} alt="" />
        </div>
        <div
          className={`flex justify-center items-center cursor-pointer  ${styles.footerBrandBlock}`}
        >
          <img src={twitter} alt="" />
        </div>
        <div
          className={`flex justify-center items-center cursor-pointer ${styles.footerBrandBlock}`}
        >
          <img src={faceBook} alt="" />
        </div>
      </div>
      <div className="flex justify-between mt-14">
        <div className={`flex-col ${styles.footerCol}`}>
          <h2>Контакты</h2>
          <hr />
          <ul className={styles.footerUl}>
            <li>
              <img src={maps1} alt="" /> Кыргызстан г. Бишкек ㅤㅤул.Киевская
              168, 720001
            </li>
            <li>
              <img src={map} alt="" /> Работаем каждый день с 10:00 до 20:00
            </li>
            <li>
              <img src={phone} alt="" /> Тел: +99600000000 Смартфоны
            </li>
            <li>
              {" "}
              <img src={gmail} alt="" />
              Email: info@turanelectronic.kg
            </li>
          </ul>
        </div>
        <div className={`flex-col ${styles.footerCol}`}>
          <h2>Контакты</h2>
          <hr />
          <ul className={styles.footerUl}>
            <li>
              <img src={maps1} alt="" /> Кыргызстан г. Бишкек ㅤㅤул.Киевская
              168, 720001
            </li>
            <li>
              <img src={map} alt="" /> Работаем каждый день с 10:00 до 20:00
            </li>
            <li>
              <img src={phone} alt="" /> Тел: +99600000000 Смартфоны
            </li>
            <li>
              {" "}
              <img src={gmail} alt="" />
              Email: info@turanelectronic.kg
            </li>
          </ul>
        </div>
        <div className={`flex-col ${styles.footerCol}`}>
          <h2>Контакты</h2>
          <hr />
          <ul className={styles.footerUl}>
            <li>
              <img src={maps1} alt="" /> Кыргызстан г. Бишкек ㅤㅤул.Киевская
              168, 720001
            </li>
            <li>
              <img src={map} alt="" /> Работаем каждый день с 10:00 до 20:00
            </li>
            <li>
              <img src={phone} alt="" /> Тел: +99600000000 Смартфоны
            </li>
            <li>
              {" "}
              <img src={gmail} alt="" />
              Email: info@turanelectronic.kg
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
