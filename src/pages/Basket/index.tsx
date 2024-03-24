import EmtityBadket from "../../components/emtityBasket/EmtityBadket";
import Recomindation from "../../components/recomindation";
import BlockBasket from "../../store/blockBasket/BlockBasket";

export default function BasketPage() {
  return (
    <>
      <div className="container">
        <p className="mb-10">Главная / Каталог / Корзина</p>
      </div>
      <EmtityBadket />
      <Recomindation />
      <BlockBasket />
    </>
  );
}
