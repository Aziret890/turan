import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import "./styles/App.scss";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    axios
      .get("https://takmatov.pythonanywhere.com/baskets")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <>
      <Header />
      <main>
        <MainRoutes />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
