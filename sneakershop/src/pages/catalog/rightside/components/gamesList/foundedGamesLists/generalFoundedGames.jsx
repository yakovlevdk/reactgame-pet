import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../gamelist.module.css";
import {
  setFoundedGames,
  resetFounedGames,
} from "../../../../../../slices/generalGames";
import { useAddToCart } from "../../../../../../hooks/useAddToCart";
export const GeneralFoundedGames = () => {
  const generalGames = useSelector((state) => state.general.foundedGames);
  const dispatch = useDispatch();
  const categoriesProducts = useSelector(
    (state) => state.categories.categoriesProducts
  );
  const availabilityProducts = useSelector(
    (state) => state.availability.availabilityProduct
  );
  const genresProducts = useSelector((state) => state.setGenre.genreProducts);

  const [filteredCatProducts, setFilteredCatProducts] = useState([]);
  const { handleAddToCart } = useAddToCart();
  useEffect(() => {
    let filteredProducts = [];

    if (
      availabilityProducts.length > 0 &&
      categoriesProducts.length > 0 &&
      genresProducts.length > 0
    ) {
      filteredProducts = availabilityProducts.filter(
        (product) =>
          categoriesProducts.includes(product) &&
          genresProducts.includes(product)
      );
    } else if (
      availabilityProducts.length > 0 &&
      categoriesProducts.length > 0
    ) {
      filteredProducts = availabilityProducts.filter((product) =>
        categoriesProducts.includes(product)
      );
    } else if (availabilityProducts.length > 0 && genresProducts.length > 0) {
      filteredProducts = availabilityProducts.filter((product) =>
        genresProducts.includes(product)
      );
    } else if (categoriesProducts.length > 0 && genresProducts.length > 0) {
      filteredProducts = categoriesProducts.filter((product) =>
        genresProducts.includes(product)
      );
    } else {
      filteredProducts = availabilityProducts.concat(
        categoriesProducts,
        genresProducts
      );
    }

    setFilteredCatProducts(filteredProducts);
  }, [categoriesProducts, availabilityProducts, genresProducts]);

  useEffect(() => {
    if (filteredCatProducts.length > 0) {
      dispatch(setFoundedGames(filteredCatProducts));
    } else {
      dispatch(resetFounedGames());
    }
  }, [filteredCatProducts, dispatch]);
  return (
    <>
      {" "}
      {generalGames.length > 0 &&
        generalGames.map((game) => {
          return (
            <div className={styles["genre_card"]} key={game.id}>
              {" "}
              <div className={styles["img_container"]}>
                {" "}
                <img
                  src={game.src}
                  width={216}
                  height={216}
                  alt={game.name}
                  className={styles["genre_img"]}
                />{" "}
                <div className={styles["opacity"]}>
                  {" "}
                  <button
                    className={styles["genre_button"]}
                    onClick={() => handleAddToCart(game)}
                  >
                    В корзину
                  </button>{" "}
                </div>{" "}
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
          );
        })}
    </>
  );
};
