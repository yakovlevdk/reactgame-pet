import styles from "../gamesList/gamelist.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addGenreProduct,
  resetGenreProducts,
} from "../../../../../slices/setGenreSlice";
import { useDispatch } from "react-redux";
import { useAddToCart } from "../../../../../hooks/useAddToCart";
export const FoundedGamesByGenres = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const genresProducts = useSelector((state) => state.setGenre.genreProducts);
  const genres = useSelector((state) => state.setGenre.genre);
  const general = useSelector((state) => state.general.foundedGames);
  useEffect(() => {
    const foundedGames = Object.values(games).filter((game) => {
      const filteredGenres = [game.genre1, game.genre2, game.genre3];
      return genres.some((genre) => filteredGenres.includes(genre));
    });
    if (foundedGames) {
      foundedGames.forEach((game) => dispatch(addGenreProduct(game)));
    }
    return () => dispatch(resetGenreProducts());
  }, [genres]);
  const { handleAddToCart } = useAddToCart();
  return (
    <>
      {genres.length > 0 &&
        general.length < 1 &&
        genresProducts.map((game) => {
          return (
            <div className={styles["genre_card"]} key={game.id}>
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
                  <span className={styles["genre_price"]}>
                    {game.price} руб.
                  </span>
                  <span className={styles["gamelist-genre"]}>
                    {game.genre1},
                  </span>
                  <span className={styles["gamelist-genre"]}>
                    {game.genre2},
                  </span>
                  <span className={styles["gamelist-genre"]}>
                    {game.genre3},
                  </span>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
};
