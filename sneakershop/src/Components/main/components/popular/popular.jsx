// import { popularGames } from "./populardb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./popular.module.css";
import { useEffect } from "react";
import { useLoadDB } from "../../../../hooks/loadDB";
import { useSelector } from "react-redux";
import { filterPopularGames } from "../../../../helpers/filterPopularGames";
import { useAddToCart } from "../../../../hooks/useAddToCart";
export const Popular = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
  };
  const { databaseLoader } = useLoadDB();
  const games = useSelector((state) => state.games);
  const filteredGames = filterPopularGames(games);
  useEffect(() => {
    databaseLoader();
  }, []);

  const { handleAddToCart } = useAddToCart();
  return (
    <>
      <h1 className={styles["popular"]}>ПОПУЛЯРНОЕ</h1>
      <br />
      <div className={styles["slider-container"]}>
        <Slider {...settings}>
          {Object.keys(filteredGames).map((key) => {
            const game = filteredGames[key];
            return (
              <div key={key} className={styles["popit"]}>
                <div className={styles["pop_img_container"]}>
                  <img
                    src={game.src}
                    width={350}
                    height={350}
                    className={styles["popimg"]}
                    alt={game.name}
                  />
                  <div className={styles["overlay"]}>
                    <button
                      className={styles["add-to-cart-btn"]}
                      onClick={() => handleAddToCart(game)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>

                <div className={styles["poptitle"]}>
                  <h5>{game.name}</h5>
                </div>
                <div className={styles["popgenre"]}>{game.genre1}</div>
                <div className={styles["popgenre"]}>{game.genre2}</div>
                <div className={styles["popgenre"]}>{game.genre3}</div>

                <div className={styles["pop_price_like"]}>
                  <span className={styles["popprice"]}>{game.price} руб</span>
                  <span>
                    <img
                      src="/h.png"
                      className={styles["poplike"]}
                      alt="Like"
                    />
                  </span>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};
