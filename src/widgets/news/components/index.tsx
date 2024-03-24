import newImages from "../../../shared/images/newImages2.png";
import "../styles.scss";
import NewDetalPage from "../components/NewDetalPage";
interface IProps {
  images: any;
  info: string;
  infoDetal: string;
}
function NewComponetns() {
  const data = [
    {
      images: newImages,
      info: "Объявляем о сотрудничестве с крупным мировыми брендами.",
      infoDetal:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At rem velit explicabomagni, saepe optio esse odit accusantium perferendis molestias, accusamuscupiditate quaerat facere alias harum voluptates quis nihil tempore!",
    },
  ];
  return (
    <div className="container">
      <div className="news__content">
        <h3>Главная / Новости</h3>
        <div className="news__content__block">
          {data.map((el:IProps, indx:number) => (
            <NewDetalPage key={indx} element={el} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewComponetns;
