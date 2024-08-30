import styles from "./cart.module.css";
import { useEffect, useState } from "react";
import { Header } from "../../Components/header/header";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { useDeleteFromCart } from "../../hooks/useDeleteFromCart";
import { useLoadCarts } from "../../hooks/useLoadCarts";
export const Cart = () => {
  const carts = useSelector((state) => state.carts.carts);
  const currentUserId = useSelector((state) => state.user.id);
  console.log(currentUserId);
  const { databaseLoader } = useLoadCarts();
  const [isChecked, setIsChecked] = useState(false);
  const currentUserCart = carts[currentUserId] || {};
  console.log(currentUserCart);
  useEffect(() => {
    databaseLoader();
  }, []);
  const { handleDeleteFromCart } = useDeleteFromCart();
  const allPrice = Object.values(currentUserCart).reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);
  const allOldPrice = Object.values(currentUserCart).reduce((acc, item) => {
    return acc + Number(item.oldprice);
  }, 0);
  return (
    <>
      <Header />

      <h1 style={{ marginLeft: "150px" }}>Список покупок</h1>
      <div className={styles["cart"]}>
        <div className={styles["cart-container"]}>
          {currentUserCart &&
            Object.values(currentUserCart).map((game, index) => {
              return (
                <div className={styles["genre_card"]} key={index}>
                  <div className={styles["img_container"]}>
                    <img
                      src={game.src}
                      width={216}
                      height={216}
                      className={styles["genre_img"]}
                    />
                    <div className={styles["opacity"]}>
                      <button
                        className={styles["genre_button"]}
                        onClick={() => handleDeleteFromCart(game.id)}
                      >
                        Удалить из корзины
                      </button>
                    </div>
                  </div>

                  <div className={styles["genre_info"]}>
                    <h4>{game.name}</h4>

                    <span className={styles["genre_board"]}></span>
                    <span className={styles["genre_oldprice"]}>
                      {game.oldprice} руб.
                    </span>
                    <div className={styles["gamelist_genres"]}>
                      <span className={styles["genre_price"]}>
                        {game.price} руб.
                      </span>
                      <span className={styles["genre_price1"]}>
                        Подробное описание товара
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <div className={styles["buy-div"]}>
          <h2>Ваша корзина</h2>
          <div className={styles["info"]}>
            <span>Товары ({Object.values(currentUserCart).length}) </span>
            <span>{allOldPrice} руб. (Без скидок)</span>
          </div>
          <div className={styles["info"]}>
            <span>Скидка </span>
            <span>-{allOldPrice - allPrice} руб.</span>
          </div>
          <div className={styles["info"]}>
            <h5>Итого </h5>
            <h5>{allPrice} руб.</h5>
          </div>
          <div className={styles["accept"]}>
            <input
              type="checkbox"
              name="accept"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="accept">
              Я даю согласие с условиями оферты, пользовательского соглашения и
              политикой конфиденциальности
            </label>
          </div>
          <button disabled={!isChecked}>Оплатить</button>
        </div>
      </div>
    </>
  );
};
