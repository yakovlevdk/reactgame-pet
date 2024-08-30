import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../slices/userSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <header className="hheader">
        <a href="/">
          {" "}
          <h3>ReactGame</h3>
        </a>

        <div className="right-header">
          <input
            type="text"
            placeholder="Поиск..."
            className="header_nav_li header_input"
          />
          <nav className={`header-nav ${isOpen ? "active" : ""}`}>
            <ul className="header-nav_ul">
              <li className="header_nav_li" onClick={() => navigate("/")}>
                Домой
              </li>
              <li
                className="header_nav_li"
                onClick={() => navigate("/catalog")}
              >
                Каталог
              </li>
              <li className="header_nav_li">Избранное</li>
              <li className="header_nav_li" onClick={() => navigate("/cart")}>
                Корзина
              </li>
              {isAuth && (
                <li
                  className="header_nav_li"
                  onClick={() => {
                    dispatch(removeUser());
                  }}
                >
                  ВЫЙТИ
                </li>
              )}
              {isAuth ? (
                <li className="header_nav_li">
                  <img
                    src="/us.png"
                    width={30}
                    height={30}
                    className="header_icon"
                  />
                </li>
              ) : (
                <li
                  className="header_nav_li"
                  onClick={() => navigate("/login")}
                >
                  Войти
                </li>
              )}
            </ul>
          </nav>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="header_menu_button"
        >
          <img src="/menu-burger-horizontal-svgrepo-com.png" />
        </button>
      </header>
    </>
  );
};
