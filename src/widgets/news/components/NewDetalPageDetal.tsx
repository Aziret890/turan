import React from "react";
import newImages from "../../../shared/images/newImages2.png";
import "../styles.scss";
function NewDetalPageDetal() {
  const data = [
    {
      images: newImages,
      info: "Объявляем о сотрудничестве с крупным мировыми брендами.",
      infoDetal:
        "Важное Объявление: Новое Стратегическое Партнерство Для Улучшения Вашего Опыта! Мы рады сообщить о заключении ключевого стратегического партнерства, направленного на улучшение вашего опыта на нашем маркетплейсе. Наша компания продолжает стремиться к обеспечению высочайшего уровня сервиса и разнообразия для наших уважаемых клиентов, и это партнерство является еще одним шагом к достижению этой цели. Мы рады объявить о сотрудничестве с крупным мировым брендом, который признан своим качеством и инновациями в своей области. Это сотрудничество открывает для наших пользователей новые возможности и преимущества:Расширенный Ассортимент: Благодаря партнерству с этим брендом мы расширяем наш ассортимент товаров, предоставляя вам еще больше выбора и вариантов для удовлетворения ваших потребностей.Эксклюзивные Предложения: Партнерство позволяет нам предложить вам эксклюзивные скидки, акции и специальные предложения, которые будут доступны только на нашем маркетплейсе.Высокое Качество и Надежность: Бренд, с которым мы сотрудничаем, известен своим высоким качеством продукции и надежностью. Это означает, что вы можете быть уверены в качестве товаров, которые приобретаете на нашем маркетплейсе.        Мы уверены, что это партнерство принесет значительные преимущества для всех наших пользователей и поможет нам продолжить строить платформу, которая соответствует вашим ожиданиям и потребностям. Следите за обновлениями, чтобы быть в курсе всех новостей и предложений, доступных благодаря нашему новому стратегическому партнерству!",
    },
  ];
  return (
    <section className="new__detal">
      <div className="container">
        <h3>Главная / Новости/{data[0].info}</h3>
        <div className="new__detal__content">
          <img
            src={
              "https://s3-alpha-sig.figma.com/img/5d66/bd7d/224205c18d523d85e93b5b7b35398f32?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qEst2~ijCTqvr3cNx9h0c9SnTVGVCOPWy~rHDqti5s9UigJh8BiH66pI3cSRZoua4YAVVkR79Uw~N4xfrAe6~sweNMHBjEx2JzPmtEHkO0TutNdlxQx9~0j1u1JUFwsmqq5ddNnlgofouJtGlAaSAjzqsIBh-K3O27p8a8DDKuYMqcXnVDVm7FQkTnDN7IY060O2-bh~s1jd15H-1~zQ420Vu3ajNZe4Rw-xtXcXDvENtFqWhTi1OXd12Qmb8F~abScLowp9YLrNA3uz-5xZiJqR8RFTvQnDCYl6Dd5neeKAvNOKgpdsUgEXtXmfteC4Fd4nhzYyx6uUeyVM~DeChw__"
            }
            alt="images not found"
          />
          <h1 className="text-center">{data[0].info}</h1>
          <p>{data[0].infoDetal}</p>
        </div>
      </div>
    </section>
  );
}

export default NewDetalPageDetal;
