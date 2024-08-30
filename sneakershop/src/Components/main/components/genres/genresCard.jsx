import { genresData } from "./genresdb";
import { useSelector } from "react-redux";
import styles from "./genres.module.css";
import { useAddToCart } from "../../../../hooks/useAddToCart";
export const GenresCard = () => {
  const genre = useSelector((state) => state.genres.genre);

  const currentGenre = genresData.find((item) => item.genre === genre);
  const { handleAddToCart } = useAddToCart();
  return (
    <>
      <div className={styles["genreCards"]}>
        {currentGenre.games.map((game) => {
          return (
            <div className={styles["genre_card"]} key={game.id}>
              <div className={styles["img_container"]} key={game.id}>
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
                  {" "}
                  {game.oldprice} руб.
                </span>
                <span className={styles["genre_price"]}>
                  {" "}
                  {game.price} руб.
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
