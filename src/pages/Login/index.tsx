import "./styles.scss";
export default function Login() {
  return (
    <section>
      <div className="container">
        <h1>Авторизация</h1>
        <div className="login__content">
          <div className="w-[80%]">
            <p className="text-center">
              Авторизуйтесь, указав свои контактные данные, или воспользовавшись
              перечисленными сервисами
            </p>
          </div>
          <input type="text" name="" id="" placeholder="" />
          <input type="text" name="" id="" placeholder="" />
          <div>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </section>
  );
}
