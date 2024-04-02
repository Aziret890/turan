import { memo } from "react";
import { Logo, Logo2 } from "../../shared/images";
import c from "./index.module.scss";
import { menuItems } from "./const";
import { Link, NavLink } from "react-router-dom";
import FavoriteIcon from "../../shared/svgIcon/favoriteIcon";
import BasketIcon from "../../shared/svgIcon/basketIcon";
import UserIcon from "../../shared/svgIcon/userIcon";
import { useAppSelector } from "../../store";

const Header = memo(() => {
  const { currentUser } = useAppSelector((s) => s.user);

  return (
    <header className={c.header}>
      <div className={`container ${c.container}`}>
        <div className={c.start}>
          <img src={Logo} alt="logo" />
        </div>
        <div className={c.copy_start}></div>
        <div className={c.center}>
          <div>
            <img src={Logo2} alt="logo2" />
          </div>
          <div className={c.centerBottom}>
            {menuItems.map(({ to, title }) => (
              <NavLink className="link--items__border" key={to} to={to}>
                {title}
              </NavLink>
            ))}
          </div>
        </div>
        <div className={c.end}>
          <div className={c.endTop}>
            <NavLink
              className={`link__items ${currentUser ? c.disable : ""} `}
              to={"/favorites"}
            >
              <FavoriteIcon />
            </NavLink>
            <NavLink
              className={`link__items ${currentUser ? c.disable : ""} `}
              to={"/basket"}
            >
              <BasketIcon />
            </NavLink>
            {currentUser ? (
              <Link className="link__items" to={"/login"}>
                <UserIcon />
              </Link>
            ) : (
              <NavLink className="link__items" to={"/profile"}>
                <UserIcon />
              </NavLink>
            )}
          </div>
          <div className={c.endBottom}></div>
        </div>
      </div>
    </header>
  );
});
Header.displayName = "Header";
export default Header;
