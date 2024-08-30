import styles from "../gamelist.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addCategoriesProduct } from "../../../../../../slices/categoriesSlice";
import { resetCategoriesProducts } from "../../../../../../slices/categoriesSlice";
import { useAddToCart } from "../../../../../../hooks/useAddToCart";
export const FoundedGamesByCategories = () => {
  const dispatch = useDispatch();
  const general = useSelector((state) => state.general.foundedGames);
  const { handleAddToCart } = useAddToCart();
  const games = useSelector((state) => state.games);
  const categories = useSelector((state) => state.categories.categories);
  const categoriesProducts = useSelector(
    (state) => state.categories.categoriesProducts
  );

  useEffect(() => {
    const foundedGames = Object.values(games).filter((game) =>
      categories.includes(game.style)
    );
    foundedGames.forEach((game) => {
      dispatch(addCategoriesProduct(game));
    });
    return () => {
      dispatch(resetCategoriesProducts());
    };
  }, [categories]);

  return (
    <>
      {general.length < 1 &&
        categoriesProducts.length > 0 &&
        categoriesProducts.map((game) => (
          <div className={styles["genre_card"]} key={game.id}>
            <div className={styles["img_container"]}>
              <img
                src={game.src}
                width={216}
                height={216}
                alt={game.name} // Добавлено для доступности
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
                {game.genre1 && (
                  <span className={styles["gamelist-genre"]}>
                    {game.genre1},
                  </span>
                )}
                {game.genre2 && (
                  <span className={styles["gamelist-genre"]}>
                    {game.genre2},
                  </span>
                )}
                {game.genre3 && (
                  <span className={styles["gamelist-genre"]}>
                    {game.genre3}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
