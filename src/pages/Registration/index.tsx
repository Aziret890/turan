import "./styles.scss";
import registrationElement from "../../shared/images/registrationElement.png";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <section>
      <div className="container">
        <h1>Авторизация</h1>
        <div className="flex justify-center mt-[50px]">
          <div className="login__content flex flex-col gap-[20px] items-center">
            <div className="w-[80%] flex justify-center">
              <p className="text-center w-[70%]">
                Авторизуйтесь, указав свои контактные данные, или
                воспользовавшись перечисленными сервисами
              </p>
            </div>
            <div className="flex flex-col items-center gap-[20px]">
              <input type="text" name="" id="" placeholder="Имя" />
              <input type="text" name="" id="" placeholder="Пароль" />
              <input
                type="text"
                name=""
                id=""
                placeholder="Потвердить Пароль"
              />
              <input type="text" name="" id="" placeholder="Email" />
              <div className="flex gap-[20px]">
                <input type="checkbox" className="login__content-checkbox" />
                <p>
                  <span>
                    Я согласен с условиями обработки персональных данных
                  </span>
                </p>
              </div>
            </div>
            <div>
              <button>Регистрация</button>
            </div>
            <img src={registrationElement} alt="" />
            <div className="flex gap-[30px] items-center">
              <p>
                <span>Уже регистрировались?</span>{" "}
              </p>
              <Link to={"/"}>
                <h4>Войти</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
