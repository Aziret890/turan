import EmtityBadket from "../../components/emtityBasket/EmtityBadket";
import Recomindation from "../../components/recomindation";
import BlockBasket from "../../store/blockBasket/BlockBasket";
import Pay from "../../widgets/Pay/Pay";

export default function BasketPage() {
  return (
    <>
      <div className="container">
        <p className="mb-10">Главная / Каталог / Корзина</p>
      </div>
      <EmtityBadket />
      <Recomindation />
      <BlockBasket />
      <Pay />
    </>
  );
}
