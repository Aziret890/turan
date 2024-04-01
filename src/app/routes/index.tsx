import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/Home";
import News from "../../pages/News";
import NewsDetail from "../../pages/NewsDetail";
import Categories from "../../pages/Categories";
import AboutUs from "../../pages/AboutUs";
import ProductDetail from "../../pages/ProductDetail";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import BasketPage from "../../pages/Basket";
import Favorites from "../../pages/Favorites";
import NotFoundPage from "../../pages/_404";
import Profile from "../../pages/profile";
import ProtectedRoute from "./protectedRoute";

export default function MainRoutes() {
  return (
    <Routes>
      {mainRoutes.map(({ path, Page, privates }) => (
        <Route
          key={path}
          path={path}
          element={<ProtectedRoute Page={Page} privates={privates} />}
        />
      ))}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

const mainRoutes = [
  {
    privates: false,
    Page: HomePage,
    path: "/",
  },
  {
    privates: false,
    Page: News,
    path: "/news",
  },
  {
    privates: false,
    Page: NewsDetail,
    path: "/news/newsId",
  },
  {
    privates: false,
    Page: Categories,
    path: "/categories",
  },
  {
    privates: false,
    Page: AboutUs,
    path: "/about",
  },
  {
    privates: false,
    Page: ProductDetail,
    path: "/product/:productId",
  },
  {
    privates: true,
    Page: BasketPage,
    path: "/basket",
  },
  {
    privates: true,
    Page: Favorites,
    path: "/favorites",
  },
  {
    privates: true,
    Page: Profile,
    path: "/profile",
  },
  {
    privates: false,
    Page: NotFoundPage,
    path: "*",
  },
  {
    privates: false,
    Page: Login,
    path: "/login",
  },
  {
    privates: false,
    Page: Registration,
    path: "/registration",
  },
];
