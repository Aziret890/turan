import newImages from "../../../shared/images/newImages2.png";
import "../styles.scss";
import NewDetalPage from "../components/NewDetalPage";
import { useNavigate } from "react-router-dom";
interface IProps {
  images: string;
  info: string;
  infoDetal: string;
  id?: number;
}
function NewComponetns() {
  const nav = useNavigate();
  const data = [
    {
      images: newImages,
      info: "Объявляем о сотрудничестве с крупным мировыми брендами.",
      id: 1,
      infoDetal:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem velit explicabomagni, saepe optio esse odit accusantium perferendis molestias, accusamuscupiditate quaerat facere alias harum voluptates quis nihil tempore!",
    },
  ];
  return (
    <div className="container">
      <div className="news__content">
        <h3>
          <span onClick={() => nav("/")}>Главная</span> / Новости
        </h3>
        <div className="news__content__block">
          {data.map((el: IProps, indx: number) => (
            <NewDetalPage key={indx} element={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewComponetns;
