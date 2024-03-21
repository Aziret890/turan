import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import "./styles/App.scss";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import BrandBlock from "../widgets/brandSwipper/Index";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainRoutes />
      </main>
      <BrandBlock />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
