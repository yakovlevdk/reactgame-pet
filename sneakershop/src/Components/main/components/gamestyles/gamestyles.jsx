import styles from "./gamestyles.module.css";
import { gameStylesData } from "./gamestylesdb";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export const GameStyles = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true, // Включаем автопроигрывание
    autoplaySpeed: 3000,
  };

  return (
    <>
      <h1 className={styles["style_header"]}>Жанры</h1>
      <Slider {...settings}>
        {gameStylesData.map(({ title, count }, index) => (
          <div key={index} className={styles["style_item"]}>
            <h4 className={styles["style_item_head"]}>{title}</h4>
            <span className={styles["style_item_span"]}>{count} игр</span>
          </div>
        ))}
      </Slider>
      <div className={styles["btn"]}>
        <button className={styles["style_button"]}>Вcе жанры </button>
      </div>
    </>
  );
};
