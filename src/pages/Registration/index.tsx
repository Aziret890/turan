import "./styles.scss";
import registrationElement from "../../shared/images/registrationElement.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";

export default function Registraion() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  async function handkeSignUp(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://takmatov.pythonanywhere.com/registration",
        form
      );
      const data = await response.data;
      const { jwt, ...user } = data;
      Cookie.set("jwt", jwt);
      if (response.status >= 200 && response.status <= 299) {
        alert("Успешная регитрация");
      }
      return user;
    } catch (error) {
      console.log("e", error);
    }
  }

  return (
    <section>
      <div className="container">
        <h1>Регистрация</h1>
        <div className="flex justify-center mt-[50px]">
          <form
            onSubmit={handkeSignUp}
            className="login__content flex flex-col gap-[20px] items-center"
          >
            <div className="w-[80%] flex justify-center">
              <p className="text-center w-[70%]">
                Авторизуйтесь, указав свои контактные данные, или
                воспользовавшись перечисленными сервисами
              </p>
            </div>
            <div className="flex flex-col items-center gap-[20px]">
              <input
                onChange={handleOnChange}
                value={form.firstName}
                type="text"
                name="firstName"
                id=""
                placeholder="Имя"
                required
                min={5}
              />
              <input
                onChange={handleOnChange}
                value={form.password}
                type="password"
                name="password"
                placeholder="Пароль"
                required
                min={7}
              />
              {/* <input
                type="text"
                name=""
                id=""
                placeholder="Потвердить Пароль"
              /> */}
              <input
                onChange={handleOnChange}
                value={form.email}
                type="email"
                name="email"
                placeholder="Email"
                required
                min={5}
              />
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
              <button type="submit">Регистрация</button>
            </div>
            <img src={registrationElement} alt="" />
            <div className="flex gap-[30px] items-center">
              <p>
                <span>Уже регистрировались?</span>
              </p>
              <Link to={"/login"}>
                <h4>Войти</h4>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
