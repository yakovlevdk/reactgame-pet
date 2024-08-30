import { useSelector } from "react-redux";
import { useAddToCart } from "../../../../../hooks/useAddToCart";
import styles from "./gamelist.module.css";

export const AllGamesList = () => {
  const games = useSelector((state) => state.games);
  const { handleAddToCart } = useAddToCart();
  return (
    <>
      {Object.keys(games).map((key) => {
        const game = games[key];
        return (
          <div className={styles["genre_card"]} key={key}>
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
                  onClick={() => handleAddToCart(game)}
                >
                  В корзину
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
                <span className={styles["genre_price"]}>{game.price} руб.</span>
                <span className={styles["gamelist-genre"]}>{game.genre1},</span>
                <span className={styles["gamelist-genre"]}>{game.genre2},</span>
                <span className={styles["gamelist-genre"]}>{game.genre3},</span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
