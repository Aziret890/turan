import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Providers from "./providers.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
AOS.init();

AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 400,
  easing: "ease",
  once: false,
  mirror: false,
  anchorPlacement: "top-bottom",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Providers>
    <App />
    <ToastContainer />
  </Providers>
);
