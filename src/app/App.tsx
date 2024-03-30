import Footer from "../widgets/Footer";
import Header from "../widgets/Header";
import "./styles/App.scss";
import MainRoutes from "./routes";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://takmatov.pythonanywhere.com/baskets/")
  //     .then((res) => console.log(res.data));
  // }, []);
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
