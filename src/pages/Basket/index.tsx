import EmtityBadket from "../../components/emtityBasket/EmtityBadket";
import Recomindation from "../../components/recomindation";

export default function BasketPage() {
  return (
    <>
      <div className="container">
        <p className="mb-10">Главная / Каталог / Корзина</p>
      </div>
      <EmtityBadket />
      <Recomindation />
    </>
  );
}
