import "./styles.scss";
import registrationElement from "../../shared/images/registrationElement.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookie from "js-cookie";
import React from "react";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const notify = () => toast.success("успешный вход!");

  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  async function handkeSignIn(e: React.FormEvent) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://takmatov.pythonanywhere.com/login",
        form
      );
      const data = await response.data;
      const { jwt, ...user } = data;
      Cookie.set("jwt", jwt);
      if (response.status >= 200 && response.status <= 299) {
        notify();
      }
      return user;
    } catch (error) {
      console.log("e", error);
    }
  }

  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
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
            <form
              onSubmit={handkeSignIn}
              className="flex flex-col items-center gap-[20px]"
            >
              <input
                onChange={handleOnChange}
                required
                type="password"
                name="password"
                value={form.password}
                min={5}
                id=""
                placeholder="Пароль"
              />
              <input
                onChange={handleOnChange}
                required
                type="email"
                value={form.email}
                name="email"
                id=""
                min={7}
                placeholder="Email"
              />
              <div className="flex gap-[20px]">
                <p>
                  <span>Впервые у нас?</span>
                </p>
                <Link to={"/registration"}>
                  <h4>Регистрация</h4>
                </Link>
              </div>
              <button type="submit">Войти</button>
            </form>
            <img src={registrationElement} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
