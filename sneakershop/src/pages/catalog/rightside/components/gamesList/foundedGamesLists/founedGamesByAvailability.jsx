import styles from "../gamelist.module.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  addAvailabilityProduct,
  resetAvaibailityProducts,
} from "../../../../../../slices/availabilitySlice";
import { useAddToCart } from "../../../../../../hooks/useAddToCart";
import { useDispatch } from "react-redux";
export const FoundedGamesByAvailability = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games);
  const availability = useSelector((state) => state.availability.availability);
  const availabilityProducts = useSelector(
    (state) => state.availability.availabilityProduct
  );
  const general = useSelector((state) => state.general.foundedGames);
  useEffect(() => {
    console.log(availability);
    const foundedAvailabilityProducts = Object.values(games).filter((game) => {
      return String(game.availability) === String(availability);
    });

    foundedAvailabilityProducts.forEach((product) =>
      dispatch(addAvailabilityProduct(product))
    );
    return () => dispatch(resetAvaibailityProducts());
  }, [availability]);
  const { handleAddToCart } = useAddToCart();
  return (
    <>
      {general.length < 1 &&
        availability &&
        availabilityProducts.map((game) => {
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
